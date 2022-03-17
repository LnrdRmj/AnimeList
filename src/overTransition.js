

var overTransition;

export function cloneToOverTransition(toClone){
    
    overTransition = createTemporaryDiv();

    let clonedEl = toClone.clone()

    overTransition.append(clonedEl)

    let offset = toClone.position();
    offset.top -= $(document).scrollTop();

    overTransition.offset(offset)
    setSameDimensions(toClone)

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

        overTransition.animate(
            {
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