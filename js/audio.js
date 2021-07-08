$('#playPause').click(function(){
        //改变暂停/播放icon
        if(audio.paused){
            audio.play();
            $('.icon-btn').removeClass('icon-play').addClass('icon-pause')
        } else{
            audio.pause();
            $('.icon-btn').removeClass('icon-pause').addClass('icon-play')
        }
    })
