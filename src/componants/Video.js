


function Video({ele,index}){
    let link= "https://www.youtube.com/embed/"+ele.id.videoId ;

    function details(){
        
    }
    return(
        <div>
            <iframe width="420" height="315"
            src={link}>
            </iframe>
            <a onClick={details}>{ele.snippet.title}</a>
        </div>

    )
}
export default Video;