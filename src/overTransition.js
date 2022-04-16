var overTransition;

export function cloneToOverTransition(toClone){
    
    overTransition = createTemporaryDiv()
    setSameDimensions(toClone)

    let offset = toClone.offset()
    offset.top -= $(document).scrollTop()
    overTransition.offset(offset)

    let clonedEl = toClone.clone()
    prepareCloneEl(clonedEl)
    overTransition.append(clonedEl)

}

function prepareCloneEl (clonedEl){

    clonedEl.removeClass()
    clonedEl.addClass('h-full w-full')

}

function createTemporaryDiv(){

    let overTransition = $('<div></div>').css('position', 'absolute');
    $('body').append(overTransition);

    return overTransition;

}

function setSameDimensions(toClone){

    overTransition.width(toClone.width())
    overTransition.height(toClone.height())

}

// newContainer e un oggetto jQuery
export function moveToDiv(newContainer){
    
    if (!overTransition) throw 'no overtransition was created'

    return new Promise( (resolve, reject ) => {

        console.log(newContainer.width());

        overTransition.animate({
            top: newContainer.offset().top,
            left: newContainer.offset().left,
            width: newContainer.width(),
            height: newContainer.height()
        },
        1000,
        'swing',
        function(){
        
            overTransition.remove();
            resolve();

        });
    });
    
}