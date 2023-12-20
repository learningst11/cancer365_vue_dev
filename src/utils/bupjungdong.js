$(function(){

    $.ajax({
        type: 'get',
        url: '/bupjungdong.json',
        dataType: 'json',
        success: function(data){
            let sidoArr = [];
            let sidoCodeArr = [];

            for(let i in data){
                let $codeNm = data[i].codeNm.toString().substr(0,2),
                $sido = data[i].sido;
                sidoArr.push($sido)
                sidoCodeArr.push($codeNm)
            }

            let sidoFilter = [...new Set(sidoArr)];
            let sidoCodeFilter = [...new Set(sidoCodeArr)];

            for(let j in sidoFilter){
                $('#sido').append(fn_option(sidoCodeFilter[j], sidoFilter[j]))
            }
            $('#sido').niceSelect('update')
        },
        error: function(req, status, error){
            console.log(req, status, error)
        }
    })

})


    // console.log(val)
    // $('#gungu').empty().append(fn_option('disabled','구/군')); 
    // $.each(haengjung.gungu, function(idx, code){
        
    //     if(val == code.sido){
    //         $('#gungu').append(fn_option(code.gungu, code.codeNm)).niceSelect('update');
   
    //     }else if(val == '36'|| val  == ''){
    //         $('#gungu').empty().append(fn_option('disabled','구/군')).niceSelect('update'); 
    //     }
    // })


