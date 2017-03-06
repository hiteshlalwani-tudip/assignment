String.prototype.isEmpty=function(){
    //document.write("in function isEmpty");
    console.log("in function");
    if (this.str=="" || this.str==null|| this.str== " " || this.str==undefined){
        return true;
    }
    else {
        return false;
    }
}