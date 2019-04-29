const exec = require('child_process').exec;
var ID=1;
setInterval(function(){
    var time=new Date();
    for(var i=1;i<4;i++){
        exec('echo '+i+' > /proc/sys/vm/drop_caches', function (err, stdout, srderr) {
            if(err) {
                console.log(srderr);
            }     
        });
    }
    console.log(ID+' '+time.toLocaleString()+' 执行清理');
    ID++;   
},3600000)//1H执行一次
