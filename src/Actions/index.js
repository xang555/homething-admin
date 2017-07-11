
export const VALIDATION_ID_INPUT = "valid_id";
export const VALIDATION_DEVICECODE_INPUT ="valid_device_code";

export function validationID(values){
    return {
        type: VALIDATION_ID_INPUT,
        values
    }
}

export function validationDeviceCode(values){
    return {
        type: VALIDATION_DEVICECODE_INPUT,
        values
    }
}
