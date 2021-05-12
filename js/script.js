function navStart() {
    const menuWidth = 200
    // click event
    $('.class_1').on('click mouseenter', function (e) {
        e.preventDefault()
        e.stopPropagation()

        // if ($(this).has('a')) {
        //     $(this).addClass('activated')
        // }
        $(this).addClass('activated').next().show().addClass('activated')
    })
    $('.class_2').on('click mouseenter', function (e) {
        e.preventDefault()
        e.stopPropagation()

        if ($(this).hasClass('contentNO') && $(this).has('a')) {
            console.log('has a tag')
            console.log('has contentNO')
            $(this).addClass('activated').show()
        }
        $(this).addClass('activated').next().show().addClass('activated').css({ left: menuWidth })
    })
    $('.class_3').on('click mouseenter', function (e) {
        e.preventDefault()
        e.stopPropagation()

        if ($(this).hasClass('contentNO') && $(this).has('a')) {
            console.log('has a tag')
            console.log('has contentNO')
            $(this).addClass('activated').show()
        }
        $(this).addClass('activated').next().show().addClass('activated').css({ left: menuWidth })
    })
    $('.class_4').on('click mouseenter', function (e) {
        e.preventDefault()
        e.stopPropagation()

        if ($(this).hasClass('contentNO') && $(this).has('a')) {
            console.log('has a tag')
            console.log('has contentNO')
            $(this).addClass('activated').show()
        }
        $(this).addClass('activated').next().show().addClass('activated').css({ left: menuWidth })
    })

    // leave event
    $('.class_1').on('mouseleave', function (e) {
        const thisObi = $(this),
            theObj = $(e.relatedTarget)
        if (!($(theObj).hasClass('activated') || $(theObj).hasClass('menuClass_2') || $(theObj).parent().hasClass('menuClass_2'))) {
            $(thisObi).removeClass('activated').next().hide().removeClass('activated')
        }
    })

    $('.class_2').on('mouseleave', function (e) {
        const thisObi = $(this),
            theObj = $(e.relatedTarget)
        if (!($(theObj).hasClass('activated') || $(theObj).hasClass('menuClass_3') || $(theObj).parent().hasClass('menuClass_3'))) {
            $(thisObi).removeClass('activated').next().hide().removeClass('activated')
        }
    })
    $('.class_3').on('mouseleave', function (e) {
        const thisObi = $(this),
            theObj = $(e.relatedTarget)
        if (!($(theObj).hasClass('activated') || $(theObj).hasClass('menuClass_4') || $(theObj).parent().hasClass('menuClass_4'))) {
            $(thisObi).removeClass('activated').next().hide().removeClass('activated')
        }
    })
    $('.class_4').on('mouseleave', function (e) {
        const thisObi = $(this),
            theObj = $(e.relatedTarget)
        if (!($(theObj).hasClass('activated') || $(theObj).hasClass('menuClass_5') || $(theObj).parent().hasClass('menuClass_5'))) {
            $(thisObi).removeClass('activated').next().hide().removeClass('activated')
        }
    })

    // nav-menu-level leave event
    $('.menuClass_2').on('mouseleave', function (e) {
        const thisObi = $(this),
            theObj = $(e.relatedTarget)
        // console.log(theObj);
        if (!$(theObj).hasClass('activated')) {
            $(thisObi).removeClass('activated').hide().prev().removeClass('activated')
        }
    })
    $('.menuClass_3').on('mouseleave', function (e) {
        const thisObi = $(this),
            theObj = $(e.relatedTarget)
        // console.log('thisObi',thisObi);
        // console.log('theObj',theObj);
        if (!$(theObj).hasClass('activated')) {
            $(thisObi).removeClass('activated').hide().prev().removeClass('activated')
        }
        if (theObj.hasClass('menuClass_2')) {
            $(thisObi).removeClass('activated').hide().prev().removeClass('activated')
        }
    })
    $('.menuClass_4').on('mouseleave', function (e) {
        const thisObi = $(this),
            theObj = $(e.relatedTarget)

        if (!$(theObj).hasClass('activated')) {
            $(thisObi).removeClass('activated').hide().prev().removeClass('activated')
        }
    })
    $('.menuClass_5').on('mouseleave', function (e) {
        const thisObi = $(this),
            theObj = $(e.relatedTarget)

        if (!$(theObj).hasClass('activated')) {
            $(thisObi).removeClass('activated').hide().prev().removeClass('activated')
        }
    })
}

$(function () {
    navStart()
})
