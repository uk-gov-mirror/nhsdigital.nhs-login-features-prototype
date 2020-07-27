// Add your custom Javascript here

function activateLoader(speed) {
    // console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            // window.parent.document.location.href = "service-access-video-selfie"
            $('#continueButton').click()
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "block")
            $("#scan-id-6").css("display", "none")
            // $("#scan-id-7").css("display", "block")

        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function activateLoader2(speed) {
    // console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    document.getElementById("spinner-status").innerHTML = "Please wait";
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            $("#spinner-heading").css("display", "block")
            $("#scan-id-0").css("display", "block")
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "none")
            $("#scan-id-6").css("display", "none")
            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 4000)
            setTimeout(function(){
                $('#continueButton').click()
            }, 5000)
        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function activateLoader3(speed) {
    // console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    document.getElementById("spinner-status").innerHTML = "Please wait";
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            $("#spinner-heading").css("display", "block")
            $("#scan-id-0").css("display", "block")
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "none")
            $("#scan-id-6").css("display", "none")
            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 1500)
            setTimeout(function(){
                $('#invalidErrorButton').click()
                console.log("js click")
            }, 1500)
        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function activateLoader4(speed) {
    // console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    document.getElementById("spinner-status").innerHTML = "Please wait";
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            $("#spinner-heading").css("display", "block")
            $("#scan-id-0").css("display", "block")
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "none")
            $("#scan-id-6").css("display", "none")
            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 1500)
            setTimeout(function(){
                $('#uploadErrorButton').click()
                console.log("js click")
            }, 1500)
        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function activateLoader5(speed) {
    console.log("activate")
    var progressbar = $('#progress_bar')
    var $ppc = $('.progress-pie-chart')
    document.getElementById("progressbar-heading").innerHTML = "Uploading your video";
    document.getElementById("spinner-status").innerHTML = "Please wait";
    $ppc.removeClass('gt-50')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            $("#spinner-heading").css("display", "block")
            $("#scan-id-0").css("display", "block")
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "none")
            $("#scan-id-6").css("display", "none")
            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 4000)
            setTimeout(function(){
                $('#confirmButton').click()
            }, 5000)
        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function reactivateLoader(speed) {
    // console.log("activate")
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate2)
            $("#scan-id-3").css("display", "none")
            $("#scan-id-7").css("display", "block")
            // $("#scan-id-5").css("display", "block")
        }
    }
    var animate2 = setInterval(function() {
        loading()
    }, time)
}

function uploadLoader(speed) {
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate2)
            // window.parent.document.location.href = "service-access-confirmation"
            // $('#confirmButton').click()
                $("#scan-id-3").css("display", "none")
                $("#scan-id-3").css("display", "none")
            $("#scan-id-7").css("display", "block")
            // $("#scan-id-5").css("display", "block")
        }
    }
    var animate2 = setInterval(function() {
        loading()
    }, time)
}

function uploadLoader2(speed) {
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate2)
            $("#spinner-heading").css("display", "block")
            document.getElementById("spinner-status").innerHTML = "Checking";
            $("#scan-id-3").css("display", "none")
            $("#scan-id-0").css("display", "block")

            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 4000)
            setTimeout(function(){
                $('#confirmButton').click()
            }, 5000)
        }
    }
    var animate2 = setInterval(function() {
        loading()
    }, time)
}

function uploadLoader3(speed) {
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate2)
            $("#spinner-heading").css("display", "block")
            document.getElementById("spinner-status").innerHTML = "Please wait";
            $("#scan-id-3").css("display", "none")
            $("#scan-id-0").css("display", "block")
            $("#scenarios").css("display", "block")

            setTimeout(function(){
                $("#spinner-status").addClass("done")
                $("#spinner").addClass("done")
                document.getElementById("spinner-status").innerHTML = "Done"

            }, 700000)
            // setTimeout(function(){
            //     // $('#confirmButton').click()
            //     document.getElementById('scan-id-0').style.display = 'none'
            //     document.getElementById('scan-id-5').style.display = 'block'
            // }, 708000)
        }
    }
    var animate2 = setInterval(function() {
        loading()
    }, time)
}

// handlers for the devmode scenarios (v20 onwards)


// Image fine

$("#image-fine").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-5').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

$("#image-fine-enrol-error").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-5').style.display = 'block'
        var enrolmentError = 'true'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// couldn't generate secure S3 url

$("#image-s3error").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-6').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})


// Paycasso - blurred V2 screen 1

$("#image-blurred-A").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-12a').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Paycasso - blurred V2 how to take a clearer photo

$("#image-blurred-B").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-12b').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Paycasso - blurred V2 Make sure your photo is clear

$("#image-blurred-C").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-12c').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Paycasso - blurred V2 what to do if you cant check/ take

$("#image-blurred-D").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-12d').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Paycasso - no image

$("#image-notfound-2").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-7e').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})


// Paycasso - blurred

$("#image-blurred-1").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-4a').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Paycasso - blurred

$("#image-blurred-2").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-4b').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Paycasso - blurred

$("#image-blurred-3").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-4c').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Paycasso - blurred

$("#image-blurred-4").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-4k').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Paycasso - blurred

$("#image-blurred-5").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-4m').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})


// AWS no face detected

$("#image-noface").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-7a').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// AWS multiple faces detected

$("#image-multiplefaces").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-7b').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// AWS technical error

$("#image-technical").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-7c').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// AWS virus detected

$("#image-virus").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-8').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Doesn't pass backend validation

$("#image-backend").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-9a').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Technical or timeout during backend validation

$("#image-backendtechnical").on("click", function(e) {
    e.preventDefault()
    $("#spinner-status").addClass("done")
    $("#spinner").addClass("done")
    document.getElementById("spinner-status").innerHTML = "Done"
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
        document.getElementById('scan-id-9b').style.display = 'block'
    }, 1000)
    document.body.scrollTop = document.documentElement.scrollTop = 0
})








function spinner() {
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
    }, 1500)
    setTimeout(function(){
        document.getElementById('scan-id-5').style.display = 'block'
    }, 1500)
}

function fastSpinner() {
    setTimeout(function(){
        document.getElementById('scan-id-0').style.display = 'none'
    }, 500)
    setTimeout(function(){
        document.getElementById('scan-id-5').style.display = 'block'
    }, 500)
}


function readURL(input, idType) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
        if (idType == "doc") {

            $("#scan-id-1").css("display", "none")
            $("#scan-id-3").css("display", "block")
            $('#uploaded-id').attr('src', e.target.result)
            $('#uploaded-id-error').attr('src', e.target.result)
        }
      if (idType == "id") {

        $("#scan-id-1").css("display", "none")
        $("#scan-id-2").css("display", "block")

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $("#scan-id-2").css("display", "none")
          $("#scan-id-3").css("display", "block")
          document.body.scrollTop = document.documentElement.scrollTop = 0
        }
        $('#uploaded-id').attr('src', e.target.result)
        $('#uploaded-id-error').attr('src', e.target.result)
      }
      if (idType == "video") {
        $("#scan-id-3").css("display", "none")
        $("#scan-id-4").css("display", "block")
        $('#uploaded-video>source').attr('src', e.target.result)
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $(location).attr('href', 'pyi-scan-id-uploading')
        }
      }
      if (idType == "selfie") {
          // console.log('populated')
          // $("#scan-id-3").css("display", "none")
          // $("#scan-id-4").css("display", "block")
          // $('#uploaded-video').attr('src', e.target.result)
          activateLoader(2)
      }

        if (idType == "photoId") {
            $("#scan-id-1").css("display", "none")
            $("#scan-id-0").css("display", "block")
            //show then hide the spinner animation
            document.body.scrollTop = document.documentElement.scrollTop = 0
            setTimeout(function(){
                document.getElementById('scan-id-0').style.display = 'none'
            }, 1000)
            setTimeout(function(){
                if (Validate(input)) {
                    document.getElementById('scan-id-5').style.display = 'block'
                    // document.body.scrollTop = document.documentElement.scrollTop = 0
                    console.log('validated')
                } else {
                    $(".camera-file-format").css("display", "block")
                    document.getElementById('scan-id-1').style.display = 'block'
                    document.body.scrollTop = document.documentElement.scrollTop = 0
                    console.log('not validated')
                }
            }, 1000)
            $('#uploaded-id').attr('src', e.target.result)
            $('#uploaded-id-error').attr('src', e.target.result)
            // activateLoader(2)
        }

        if (idType == "photoIdAuto") {
            $("#scan-id-1").css("display", "none")
            $("#scan-id-5").css("display", "block")
            document.body.scrollTop = document.documentElement.scrollTop = 0
            //show then hide the spinner animation
            setTimeout(function(){
                if (Validate(input)) {
                    document.getElementById('scan-id-5').style.display = 'block'
                    // document.body.scrollTop = document.documentElement.scrollTop = 0
                    console.log('validated 1')
                } else {
                    $(".camera-file-format").css("display", "block")
                    document.getElementById('scan-id-1').style.display = 'block'
                    document.body.scrollTop = document.documentElement.scrollTop = 0
                    console.log('not validated')
                }
            }, 1000)
            $('#uploaded-id').attr('src', e.target.result)
            $('#uploaded-id-error').attr('src', e.target.result)
            // activateLoader(2)
        }

        if (idType == "photoIdAny") {
            $("#scan-id-1").css("display", "none")
            $("#scan-id-0").css("display", "block")
            document.body.scrollTop = document.documentElement.scrollTop = 0
            //show then hide the spinner animation
            setTimeout(function(){
                if (Validate(input)) {
                    document.getElementById('scan-id-3').style.display = 'block'
                    document.getElementById('scan-id-0').style.display = 'none'
                    document.body.scrollTop = document.documentElement.scrollTop = 0
                    console.log('validated 1')
                    uploadLoader3(2)
                } else {
                    $(".camera-file-format").css("display", "block")
                    document.getElementById('scan-id-1').style.display = 'block'
                    document.body.scrollTop = document.documentElement.scrollTop = 0
                    console.log('not validated')
                }
            }, 3000)
            $('#uploaded-id').attr('src', e.target.result)
            $('#uploaded-id-error').attr('src', e.target.result)
            $('#uploaded-id-2').attr('src', e.target.result)
            $('#uploaded-id-3').attr('src', e.target.result)
            $('#uploaded-id-4').attr('src', e.target.result)

        }

        if (idType == "videoSelfie") {
            $("#scan-id-1").css("display", "none")
            $("#scan-id-3").css("display", "block")
            $('#uploaded-video>source').attr('src', e.target.result)
            $('#uploaded-video').attr('src', e.target.result)
            activateLoader(2)
        }
    }
    reader.readAsDataURL(input.files[0])
  }
}

function onComplete(e) {
    console.log('complete')
    document.getElementById('submit-videoSelfie3-button').disabled = false
}

var _validPhotoFileExtensions = [".jpeg", ".jpg"]
var _validVideoFileExtensions = [".mpg", ".mp4"]

function Validate(oForm) {
    console.log('validate')
    if (oForm.type == "file") {
        var sFileName = oForm.value
        if (sFileName.length > 0) {
            var blnValid = false
            for (var j = 0; j < _validPhotoFileExtensions.length; j++) {
                var sCurExtension = _validPhotoFileExtensions[j]
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true
                    $('.dev-mode-file').html()
                    return true
                    break
                }
            }
            if (!blnValid) {
                for (var k = 0; k < _validPhotoFileExtensions.length; k++) {
                    var sCurExtension = _validPhotoFileExtensions[k]
                    fileType = sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase()
                    $('.dev-mode-file').html(fileType)
                }
                $('.dev-mode').css("display", "block")
                return false
            }
        }
    }
    return true

    // EXIF.readFromBinaryFile(oForm, function() {
    //
    //     var xRes = EXIF.getTag(this, "ImageWidth")
    //     var yRes = EXIF.getTag(this, "PixelYDimension")
    //     $('.dev-mode-file').html(xRes)
    //     console.log('get exif data')
    //     return false
    // })
    //
    // return true
}

function playSelectedFile(event) {
    var URL = window.URL || window.webkitURL
    var file = event.files[0]
    var type = file.type
    console.log(file)
    // console.log(file.type)
    var videoNode = document.getElementById('uploaded-video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var isError = canPlay === 'no'

    if (isError) {
        return
    }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL

    $("#scan-id-1").css("display", "none")
    $("#scan-id-5").css("display", "block")

    // uploadLoader(2)
}

function loadSelectedFile(event) {
    var URL = window.URL || window.webkitURL
    var file = event.files[0]
    var type = file.type
    // console.log(file)
    // console.log(file.type)
    var videoNode = document.getElementById('uploaded-video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var isError = canPlay === 'no'

    if (isError) {
        return
    }
    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL

    $("#scan-id-1").css("display", "none")
    $("#scan-id-0").css("display", "block")
    spinner(2)
}

function clearFileInput(ctrl) {
    try {
        ctrl.value = null;
    } catch(ex) { }
    if (ctrl.value) {
        ctrl.parentNode.replaceChild(ctrl.cloneNode(true), ctrl);
    }
}

$("#short-video").change(function(){
    loadSelectedFile(this)
})

$("#video-selfie").change(function(){
    playSelectedFile(this)
})

$('#video-overlay').change(function(){
    playSelectedFile(this)
})

$('#video-overlay2').change(function(){
    playSelectedFile(this)
})

$("#id-document").change(function(){
  readURL(this, "id")
})

$("#photo-id-document").change(function(){
    readURL(this, "photoId")
})

$("#photo-id-document-auto").change(function(){
    readURL(this, "photoIdAuto")
})

$("#photo-id-document-any").change(function(){
    readURL(this, "photoIdAny")
})

$("#document").change(function(){
    readURL(this, "doc")
})

$("#linkage-key-loader").on("load", function() {
    reactivateLoader(2);
    console.log("is this firing!!");
})

// submit photo button action
$("#submit-id-button").on("click", function(e) {
  e.preventDefault()
  $("#scan-id-2").css("display","none")
  $("#scan-id-3").css("display","block")
  document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit photo button action
$("#submit-document-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-1").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit photo button action
$("#confirmButton").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-0").css("display","none")
    $("#scan-id-6").css("display","block")
    console.log("show 6")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit photo button action
$("#uploadErrorButton").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-0").css("display","none")
    $("#scan-id-7").css("display","block")
    console.log("show 7")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit photo button action
$("#invalidErrorButton").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-0").css("display","none")
    $("#scan-id-6").css("display","block")
    console.log("show 6")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit photo button action
$("#submit-document-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-3").css("display","none")
    $("#scan-id-1").css("display","block")
    document.getElementById("id-document").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})


// submit photo button action
$("#usercheck-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-3").css("display","none")
    $("#scan-id-5").css("display","none")
    $("#scan-id-1").css("display","block")
    clearFileInput(document.getElementById("photo-id-document-auto"))
    document.getElementById("id-document").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit photo button action
$("#usercheck-back-button2").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-3").css("display","none")
    $("#scan-id-5").css("display","none")
    $("#scan-id-1").css("display","block")
    clearFileInput(document.getElementById("photo-id-document-any"))
    $("#spinner").removeClass("done")
    $("#spinner-status").removeClass("done")
    $('.progress-value').html('0%')
    document.getElementById("spinner-status").innerHTML = "Please wait"
    document.getElementById("id-document").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit back button action
$("#submit-id-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-2").css("display","none")
    $("#scan-id-1").css("display","block")
    document.getElementById("id-document").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit button action
$("#submit-photoId-button").on("click", function(e) {
    e.preventDefault()
    activateLoader2(2)
    $("#scan-id-0").css("display","none")
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit button action for combined page
$("#submit-photoId-button").on("click", function(e) {
    e.preventDefault()
    // activateLoader2(2)
    $("#scan-id-0").css("display","none")
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

$("#submit-photoId-button-error").on("click", function(e) {
    e.preventDefault()
    activateLoader3(2)
    $("#scan-id-0").css("display","none")
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

$("#submit-photoId-button-error-upload").on("click", function(e) {
    e.preventDefault()
    activateLoader4(2)
    $("#scan-id-0").css("display","none")
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit button action
$("#submit-videoSelfie-button").on("click", function(e) {
    e.preventDefault()
    activateLoader(2)
    $("#scan-id-0").css("display","none")
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit button action post v8 version
$("#submit-videoSelfie2-button").on("click", function(e) {
    e.preventDefault()
    activateLoader2(2)
    $("#scan-id-0").css("display","none")
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

$('#uploaded-video').on('ended', function(){
    // alert('Video has ended!')
    $("#submit-videoSelfie3-button").attr("disabled", false)
    $("#submit-videoSelfie4-button").attr("disabled", false)
    $('#video-overlay').fadeIn()
    $('#uploaded-video').currentTime = 0
})

$('#recorded').on('ended', function(){
    // alert('Video has ended!')
    $("#submit-videoSelfie3-button").attr("disabled", false)
    $("#submit-videoSelfie4-button").attr("disabled", false)
    $('#video-overlay2').fadeIn()
    $('#recorded').currentTime = 0
})

// submit button action post v12 version - preview first
$("#submit-videoSelfie3-button").on("click", function(e) {
    e.preventDefault()

    if ($("#submit-videoSelfie3-button").prop('disabled') === false) {
        activateLoader2(2)
        $("#scan-id-0").css("display","none")
        $("#scan-id-5").css("display","none")
        $("#scan-id-6").css("display","none")
        $("#scan-id-3").css("display","block")
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }
})

// submit button action post v13 version - preview first
$("#submit-videoSelfie4-button").on("click", function(e) {
    e.preventDefault()
    console.log($("#submit-videoSelfie4-button").prop)

    if ($("#submit-videoSelfie4-button").prop('disabled') === false) {
        activateLoader2(2)
        $("#scan-id-0").css("display", "none")
        $("#scan-id-5").css("display", "none")
        $("#scan-id-6").css("display", "none")
        $("#scan-id-3").css("display", "block")
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }
})

// submit button action HTML% version - preview first
$("#submit-videoSelfie5-button").on("click", function(e) {
    e.preventDefault()
    console.log($("#submit-videoSelfie5-button").prop)

    // if ($("#submit-videoSelfie5-button").prop('disabled') === false) {
        activateLoader5(2)
        $("#scan-id-0").css("display", "none")
        $("#scan-id-5").css("display", "none")
        $("#scan-id-6").css("display", "none")
        $("#scan-id-3").css("display", "block")
        document.body.scrollTop = document.documentElement.scrollTop = 0
    // }
})

// submit button action post v8 version
$("#submit-videoSelfie2-button-error").on("click", function(e) {
    e.preventDefault()
    activateLoader3(2)
    $("#scan-id-0").css("display","none")
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit back button action
$("#submit-photoId-back-button").on("click", function(e) {
    e.preventDefault()
    reactivateLoader(2)
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit back button action
$("#video-selfie-back-button").on("click", function(e) {
    e.preventDefault()
    reactivateLoader(1)
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// create back button action
$("#create-video-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-3").css("display","none")
    $("#scan-id-2").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// Visually impaired button action
$("#visually-impaired").on("click", function(e) {
    e.preventDefault()
    for (var i = 1; i < 3; i++) {
        document.getElementById('check-' + i).style.display = 'none'
    }
    $("#check-intro").css("display","none")
    $("#visually-impaired-advice").css("display","block")
    $("#visually-impaired-advice").focus()
    document.body.scrollTop = document.documentElement.scrollTop = 0

})

$("#id-selfie").change(function(){
  readURL(this, "video")
})

$("#selfie").change(function(){
    readURL(this, "selfie")
})

// submit back button action
$("#submit-video-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-4").css("display","none")
    $("#scan-id-3").css("display","block")
    document.getElementById("id-selfie").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

$("#selectAll").on("click", function(e) {
  if (e.target.checked) {
    inputs = $(".token-check").prop('checked', true);
  } else {
    inputs = $(".token-check").prop('checked', false);
  }
})

$("#selectStatus").on("change", function(e) {
  var filterType = e.target.options[e.target.selectedIndex].value;
  $("#token-title").text(filterType);
  var table = $("table")[0].className;
  var tableStatusCol = ($("table")[0].className === "tokenTable") ? 5 : 3;
  var tokenRows = $(".token-row");

  for(var i = 0; i < tokenRows.length; i++) {

    var currentTokenStatus = tokenRows[i].children[tableStatusCol].children[0].innerHTML;

    if (filterType !== "All") {
      if (currentTokenStatus.toLowerCase() === filterType.toLowerCase()) {
        tokenRows[i].style.display = "table-row";
      } else {
        tokenRows[i].style.display = "none";
      }
    } else {
      tokenRows[i].style.display = "table-row";
  }
}
})

$("#modal-create-acc").on("click", function(e){
  e.preventDefault();
  window.parent.document.location.href = e.target.href;
})

$('#modal-verify').on('click', function(e) {
  e.preventDefault();
  window.parent.document.location.href = e.currentTarget.href;
})

$("#modalLoginComplete").on("click", function(e){
  e.preventDefault();
  window.parent.document.location.href = e.target.href;
})

$("#securityCode").on("input", function(e) {
  if (e.currentTarget.value.length == 4) {
    $("#securitycodeContinue").removeClass('button--disabled');
  } else {
    $("#securitycodeContinue").addClass('button--disabled');
  }
})

$("#securitycodeContinue").on("click", function(e) {
  //console.log(e.target.href);
  if (e.currentTarget.href == "https://eredbook-uat.azurewebsites.net/parental/Inbox") {
    window.parent.document.location.href = e.target.href;
  }
})

// expand ID document image in ID checker
$(".idcheck-image-expand-button").on("click", function(e) {
    e.preventDefault()
    $( e.target ).closest(".panel").children().toggleClass( "expanded" )
    $( e.target ).toggleClass( "expanded" )
})

// expand ID document image in ID checker
$(".idcheck-video-paired-button").on("click", function(e) {
    e.preventDefault()

    if ($( e.target ).closest(".panel").children().hasClass('expanded')) {
        $( e.target ).closest(".panel").children().toggleClass( "expanded" )
        $( e.target ).closest(".idcheck-media").children('.idcheck-image').hide()
        $( e.target ).text( "Show document" )
    } else {
        $( e.target ).closest(".panel").children().toggleClass( "expanded" )
        $( e.target ).closest(".idcheck-media").children('.idcheck-image').show()
        $( e.target ).text( "Hide document" )
    }
})

// give permission for camera

$("#allow-camera-button").on("click", function(e) {
    e.preventDefault()
    const constraints = { audio: false, video: true }
    window.iproovLink = e.target.href
    navigator.mediaDevices.getUserMedia(constraints).then(cameraEnabled)
})

var cameraEnabled = function (stream) {

    window.parent.document.location.href = window.iproovLink
    // $("#enable-camera").css("display","none")
    // $("#camera-enabled").css("display","block")
}

// submit photo button action
$("#submit-id-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-2").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})


// helper function to place modal window as the first child
// of the #page node
var m = document.getElementById('modal_window'),
    p = document.getElementById('content')

function swap () {
  if (m !== null && p !== null) {
    p.parentNode.insertBefore(m, p) 
  }
}

swap();

// modal window
(function() {

  'use strict'

  // list out the vars
  var mOverlay = getId('modal_window'),
      mOpen = getId('modal_open'),
      mCreate = getId('modal_create'),
      mClose = getId('modal_close'),
      modal = getId('modal_holder'),
      emailField = getId('emailAddress'),
      allNodes = document.querySelectorAll("*"),
      modalOpen = false,
      lastFocus,
      i

  // wrap all this and check the modal is on the page first
  if (mOverlay !== null) {
    // Let's open the modal
    function modalShow ( event ) {
      event.preventDefault ? event.preventDefault() : event.returnValue = false
      lastFocus = document.activeElement
      mOverlay.setAttribute('aria-hidden', 'false')
      modalOpen = true
      modal.setAttribute('tabindex', '0')
      modal.forms[0].elements[0].focus()
      modal.focus()
      mOverlay.scrollTop(0)
      emailField.focus()
    }

    // binds to both the button click and the escape key to close the modal window
    // but only if modalOpen is set to true
    function modalClose ( event ) {
      if (modalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
          mOverlay.setAttribute('aria-hidden', 'true')
          modal.setAttribute('tabindex', '-1')
          event.preventDefault()
          modalOpen = false
          lastFocus.focus()
      }
    }

    // Restrict focus to the modal window when it's open.
    // Tabbing will just loop through the whole modal.
    // Shift + Tab will allow backup to the top of the modal,
    // and then stop.
    function focusRestrict ( event ) {
      if (modalOpen && !modal.contains( event.target ) ) {
          event.stopPropagation()
          modal.focus()
      }
    }

    // Close modal window by clicking on the overlay
    mOverlay.addEventListener('click', function( e ) {
      if (e.target == modal.parentNode) {
          modalClose( e )
      }
    }, false)

    // open modal by btn click/hit
    // mOpen.addEventListener('click', modalShow)
    mCreate.addEventListener('click', modalShow, false)
    // close modal by btn click/hit
    mClose.addEventListener('click', modalClose)

    // close modal by keydown, but only if modal is open
    document.addEventListener('keydown', modalClose)

    // restrict tab focus on elements only inside modal window
    for (i = 0; i < allNodes.length; i++) {
      allNodes.item(i).addEventListener('focus', focusRestrict)
    }
  }

  // Let's cut down on what we need to type to get an ID
  function getId ( id ) {
      return document.getElementById(id)
  }
})()

$(document).ready(function () {
  // Turn off jQuery animation
  jQuery.fx.off = true

    $('#video-overlay').click(function () {
        if ($('#uploaded-video').get(0).paused) {
            $('#uploaded-video').get(0).play()
            $('#video-overlay').fadeOut()
        } else {
            console.log('show up')
            $('#uploaded-video').get(0).pause()
            $('#video-overlay').fadeIn()
        }
    })

    $('#video-overlay2').click(function () {

        if ($('#recorded').get(0).paused) {
            $('#recorded').get(0).play()
            $('#video-overlay').fadeOut()
        } else {
            console.log('show up')
            $('#recorded').get(0).pause()
            $('#video-overlay').fadeIn()
        }
    })

  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

// radio button functionality

$('#continue').click(function(e) {
    var value = $('input:radio[name=radio-inline-group]:checked').val()
    if (value == null){
        e.preventDefault()
    } else {
        location.href = value
    }
})
