import $ from 'jquery'

var overTransition;

export function cloneToOverTransition(toClone){
    
    // overTransition = $('#over-transition')
    
    overTransition = $('<div></div>').css('position', 'absolute');
    $('body').append(overTransition);

    let clonedEl = toClone.clone()

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

        overTransition.remove();

    });

}