let tab =$('.guide_inner_tab li');
let contents=$('.guide_count_element_wrap>div')




tab.click(function(){
    let tg=$(this);
    let i=tg.index();

    tab.removeClass('active');
    contents.css('display','none')


    tg.addClass('active');
    contents.eq(i).css('display','block')
    if(i==0){
        $('.guide_count_element_wrap').css('height',"6472px")
    }else if(i==1){
        $('.guide_count_element_wrap').css('height',"8208px")
    }else if(i==2){
        $('.guide_count_element_wrap').css('height',"1095px")
    }else if(i==3){
        $('.guide_count_element_wrap').css('height',"3725px")
    }else if(i==4){
        $('.guide_count_element_wrap').css('height',"5527px") 
    }else{
        $('.guide_count_element_wrap').css('height',"1319px")
    }
});
