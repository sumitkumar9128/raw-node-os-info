const http = require('http')
const os = require('os')

const PORT = 3000

const server = http.createServer((req, res)=>{
    console.log(req.method, req.url)
    res.setHeader("Content-Type", "application/json")

    if(req.url === "/"){
        console.log("Hlw Geek")

        const systemInfo = {
            hostname: os.hostname(),
            platform: os.platform(),
            architecture: os.arch(),
            cpu_cores: os.cpus().length,
            total_memory_gb: (os.totalmem()/1024/1024/1024).toFixed(2),
            total_free_memory_gb: (os.freemem()/1024/1024/1024).toFixed(2),
            uptime: (os.uptime()/3600).toFixed(2),
            network_interface: os.networkInterfaces() 
        };
         res.writeHead(200)
         res.end(JSON.stringify(systemInfo, null, 2))
    }
    else if(req.url === '/cpu'){
        const cpu = {
            cpu: os.cpus()
        }
        res.writeHead(200);
        res.end(JSON.stringify(cpu, null, 2))
    }
    else if(req.url === "/memory"){

            const total = os.totalmem()
            const free = os.freemem()
            const used = total-free

            const memory = {
                total_memory_gb:(total/1024/1024/1024).toFixed(2),
                total_free_memory_gb:(free/1024/1024/1024).toFixed(2),
                used: (used/1024/1024/1024).toFixed(2)
            }
            res.writeHead(200)
            res.end(JSON.stringify(memory, null, 2))
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end("404 not found")
    }

})


server.listen(PORT, ()=>{
    console.log(`server is running at ${PORT} port`)
})




























// const os = require("os");
// // console.log(os.version())
// // console.log(os.platform())
// // console.log(os.arch())
// // console.log(os.cpus().length)

// console.log("different one")

// console.log((os.freemem()/1024/1024/1024).toFixed(2)+ 'GB')
// console.log((os.totalmem()/1024/1024/1024).toFixed(2)+ ' GB')
// // console.log(os.networkInterfaces())
// const up = (os.uptime()/3600).toFixed(2)

// console.log(`uptime ${up} hour`)

// console.log(os.homedir())
// console.log(os.type())
// console.log(os.userInfo())