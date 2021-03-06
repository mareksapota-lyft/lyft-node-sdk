/**
 * Lyft API
 * Drive your app to success with Lyft's API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api-support@lyft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import ErrorDetail from './ErrorDetail';





/**
* The ApiError model module.
* @module model/ApiError
* @version 1.0.0
*/
export default class ApiError {
    /**
    * Constructs a new <code>ApiError</code>.
    * Details about why a request failed, such as missing or invalid parameters
    * @alias module:model/ApiError
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ApiError</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ApiError} obj Optional instance to populate.
    * @return {module:model/ApiError} The populated <code>ApiError</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiError();

            
            
            

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('error_detail')) {
                obj['error_detail'] = ApiClient.convertToType(data['error_detail'], [ErrorDetail]);
            }
            if (data.hasOwnProperty('error_description')) {
                obj['error_description'] = ApiClient.convertToType(data['error_description'], 'String');
            }
        }
        return obj;
    }

    /**
    * A \"slug\" that serves as the error code (eg. \"bad_parameter\")
    * @member {String} error
    */
    error = undefined;
    /**
    * @member {Array.<module:model/ErrorDetail>} error_detail
    */
    error_detail = undefined;
    /**
    * A user-friendly description of the error (appropriate to show to an end-user)
    * @member {String} error_description
    */
    error_description = undefined;








}


