export function GetSubjectList() {
    if (typeof GetSubjectList.ret == 'undefined') {
        GetSubjectList.ret = GetSubjectListHardcoded();
    }
    
    return GetSubjectList.ret;
}

function GetSubjectListHardcoded() {
    let ret = new Map();
    ret.set('bulgarian', {title: 'Български', status: 'potential'});
    ret.set('greek', {title: 'Ελληνικά',  status: 'potential'});
    return ret;
}