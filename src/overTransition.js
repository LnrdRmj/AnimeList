import $ from 'jquery'

var overTransition;

$(function() {

    overTransition = $('#over-transition')

})

export function cloneToOverTransition(toClone){
    
    let clonedEl = toClone.clone()

    overTransition.empty()
    overTransition.append(clonedEl)

    let offset = toClone.position();
    offset.top -= $(document).scrollTop();

    overTransition.offset(offset)
    setSameDimensions(toClone)

}

function setSameDimensions(toClone){

    overTransition.width(toClone.width())
    overTransition.height(toClone.height())

}

export function moveToDiv(newContainer){
    
    overTransition.animate(newContainer.offset(), 1000, 'swing',function(){

        overTransition.empty();

    });

}