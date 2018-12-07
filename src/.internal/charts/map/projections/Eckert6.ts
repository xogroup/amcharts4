/**
 * Functionality for Eckert6 projection
 *
 * The function(s) below are from D3.js library (https://d3js.org/)
 * 
 * ```
 * Copyright 2017 Mike Bostock
 * 
 * Redistribution and use in source and binary forms, with or without 
 * modification, are permitted provided that the following conditions are met:
 * 
 * 1. Redistributions of source code must retain the above copyright notice, 
 *    this list of conditions and the following disclaimer.
 * 
 * 2. Redistributions in binary form must reproduce the above copyright notice, 
 *    this list of conditions and the following disclaimer in the documentation 
 *    and/or other materials provided with the distribution.
 * 
 * 3. Neither the name of the copyright holder nor the names of its 
 *    contributors may be used to endorse or promote products derived from this 
 *    software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 * ```
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Projection } from "./Projection";
import { IGeoPoint } from "../../../core/defs/IGeoPoint";
import { IPoint } from "../../../core/defs/IPoint";
import { registry } from "../../../core/Registry";

/**
 * Eckert6 projection.
 */
export class Eckert6 extends Projection {

	/**
	 * Converts screen coordinates to latitude/longitude.
	 * 
	 * @param  {number}     x  X
	 * @param  {number}     y  Y
	 * @return {IGeoPoint}     Geographical coordinates in radians
	 */
	public unproject(x: number, y: number): IGeoPoint {
		let j = 1 + Math.PI / 2,
			k = Math.sqrt(j / 2);
		return {
			longitude: x * 2 * k / (1 + Math.cos(y *= k)),
			latitude: Math.asin((y + Math.sin(y)) / j)
		};
	}

	/**
	 * Converts geographical coordinates to screen coordinates.
	 * 
	 * @param  {number}  lambda  Lambda parameter
	 * @param  {number}  phi     Phi parameter
	 * @return {IPoint}          Screen coordinates
	 */
	public project(lambda: number, phi: number): IPoint {
		let k = (1 + Math.PI / 2) * Math.sin(phi);
		for (let i = 0, delta = Infinity; i < 10 && Math.abs(delta) > 0.00001; i++) {
			phi -= delta = (phi + Math.sin(phi) - k) / (1 + Math.cos(phi));
		}
		k = Math.sqrt(2 + Math.PI);
		return {
			x: lambda * (1 + Math.cos(phi)) / k,
			y: 2 * phi / k
		};
	}

}

/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 * 
 * @ignore
 */
registry.registeredClasses["Eckert6"] = Eckert6;