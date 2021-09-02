export function selectVersion(payload){
    return {type : "SELECT_VERSION", payload}
}


export function selectColor(payload){
    return {type : "SELECT_COLOR", payload}
}

export function selectRim(payload){
    return {type : "SELECT_RIM", payload}
}

export function selectSaddlery(payload){
    return {type : "SELECT_SADDLERY", payload}
}

export function selectEquipment(payload){
    console.log(payload, 'payload');
    return {type : "SELECT_EQUIPMENT", payload}
}

export function selectAccessories(payload){
    console.log(payload, 'payload');
    return {type : "SELECT_ACCESSORIES", payload}
}


