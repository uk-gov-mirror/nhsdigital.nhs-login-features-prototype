// ES6 or Vanilla JavaScript

$(document).ready(function() {

    // Connect the styled button with the form input. The input is hidden. This is done in order to have a custom embed button. 
    $("#upload-button").click(function(e) {
      $('#video_file').click();
    })
  
    // Once the video file is added, display the progress UI and submit the form for upload.
    $("#video_file").change(function(e) {
      $("#loader").css('display', "block");
      $("#progress-percent").css('display', "block");
      $("form[name='upload_form']").submit();
      e.preventDefault();
    })
  
    // The sumbit function makes a post request. By default this replaces the page with the response, which is the JSON response after the post request. To stay on the same page the ajax request requires some more information.
    $("form[name='upload_form'").submit(function(e) {
      e.preventDefault();
      var fd = new FormData($("form")[0]);
      $.ajax({
        url: $(this).attr('action'),
        data: fd,
        processData: false,
        contentType: false,
        crossDomain: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        type: 'POST',
        success: function(data, textStatus, xhr) {
          // On receiving the response, update the UI with the embed code and URL of the video
          successText(data);
  
          //Query the status endpoint 
        //   var call = "https://upload.embed.ly/1/status?key=" + emb_key + "&video_id=" + data.video_id;
  
          //Poll status endpoint until video is processed
          pollForFinished(call, function(){renderIframe(data);});
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log("Upload Failed for video: " + errorThrown);
        },
        xhr: function() {
          //Monitor and display the percentage uploaded
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener("progress", function(evt) {
            if (evt.lengthComputable) {
              var percentComplete = (evt.loaded / evt.total) * 100.0;
              var text = percentComplete.toFixed(2) + "% uploaded."
              $(".video-display").html('<p>' + text + '</p>');
            }
          }, false);
          return xhr;
        }
      });
    });
  });
  
  var successText = function(data) {
    $("#upload-button").css('display', 'none');
    $(".url-display").html("<h1>URL</h1>");
    $(".embed-code").html("<h1>Embed Code</h1><p>You can copy and paste this embed code while the video processes.</p>");
    $('.url-display').append("<p><a target='_blank' href='" + data.url + "'>" + data.url + "</a></p>")
    $(".embed-code").append(
      "<textarea name='textarea' rows='7' cols='50'>" + data.html + "</textarea>");
    $(".video-display").html("<h1>Video</h1><p>The video is currently processing and will display momentarily.</p>");
  }
  
  var renderIframe = function(data) {
    $("#loader").css('display', "none");
    $("#progress-percent").css('display', "none");
    $(".video-display").html('<h1>Video</h1><p>' + data.html + '</p>');
  };
  
  
  var checkProcessed = function(_call, cb) {
    $.ajax({
      url: _call,
      type: 'GET',
      success: function(d) {
        cb(d);
      },
      error: function(d) {
        console.log('error!' + JSON.stringify(d));
        cb(d);
      }
    });
  }
  
  var pollForFinished = function(_call, cb) {
    checkProcessed(_call, function(res) {
      if (res.status == "finished") {
        cb();
      } 
      else if(res.status == "cancelled" || res.status =="failed"){
             $(".video-display").html('<h1>Video</h1><p>' + res.status + '</p>');
          }
      else {
        setTimeout(pollForFinished(_call,cb), 10000);
      }
    });
  }






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



// from app.js

// Add your custom Javascript here


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

/* function swap () {
  if (m !== null && p !== null) {
    p.parentNode.insertBefore(m, p) 
  }
}
 */
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



// show hide content

;(function (global) {
    'use strict'
  
    var $ = global.jQuery
    var GOVUK = global.GOVUK || {}
  
    function ShowHideContent () {
      var self = this
      // Radio and Checkbox selectors
      var selectors = {
        namespace: 'ShowHideContent',
        radio: '[data-target] > input[type="radio"]',
        checkbox: '[data-target] > input[type="checkbox"]'
      }
  
      // Escape name attribute for use in DOM selector
      function escapeElementName (str) {
        var result = str.replace('[', '\\[').replace(']', '\\]')
        return result
      }
  
      // Adds ARIA attributes to control + associated content
      function initToggledContent () {
        var $control = $(this)
        var $content = getToggledContent($control)
  
        // Set aria-controls and defaults
        if ($content.length) {
          $control.attr('aria-controls', $content.attr('id'))
          $control.attr('aria-expanded', 'false')
          $content.attr('aria-hidden', 'true')
        }
      }
  
      // Return toggled content for control
      function getToggledContent ($control) {
        var id = $control.attr('aria-controls')
  
        // ARIA attributes aren't set before init
        if (!id) {
          id = $control.closest('[data-target]').data('target')
        }
  
        // Find show/hide content by id
        return $('#' + id)
      }
  
      // Show toggled content for control
      function showToggledContent ($control, $content) {
        // Show content
        if ($content.hasClass('js-hidden')) {
          $content.removeClass('js-hidden')
          $content.attr('aria-hidden', 'false')
  
          // If the controlling input, update aria-expanded
          if ($control.attr('aria-controls')) {
            $control.attr('aria-expanded', 'true')
          }
        }
      }
  
      // Hide toggled content for control
      function hideToggledContent ($control, $content) {
        $content = $content || getToggledContent($control)
  
        // Hide content
        if (!$content.hasClass('js-hidden')) {
          $content.addClass('js-hidden')
          $content.attr('aria-hidden', 'true')
  
          // If the controlling input, update aria-expanded
          if ($control.attr('aria-controls')) {
            $control.attr('aria-expanded', 'false')
          }
        }
      }
  
      // Handle radio show/hide
      function handleRadioContent ($control, $content) {
        // All radios in this group which control content
        var selector = selectors.radio + '[name=' + escapeElementName($control.attr('name')) + '][aria-controls]'
        var $form = $control.closest('form')
        var $radios = $form.length ? $form.find(selector) : $(selector)
  
        // Hide content for radios in group
        $radios.each(function () {
          hideToggledContent($(this))
        })
  
        // Select content for this control
        if ($control.is('[aria-controls]')) {
          showToggledContent($control, $content)
        }
      }
  
      // Handle checkbox show/hide
      function handleCheckboxContent ($control, $content) {
        // Show checkbox content
        if ($control.is(':checked')) {
          showToggledContent($control, $content)
        } else { // Hide checkbox content
          hideToggledContent($control, $content)
        }
      }
  
      // Set up event handlers etc
      function init ($container, elementSelector, eventSelectors, handler) {
        $container = $container || $(document.body)
  
        // Handle control clicks
        function deferred () {
          var $control = $(this)
          handler($control, getToggledContent($control))
        }
  
        // Prepare ARIA attributes
        var $controls = $(elementSelector)
        $controls.each(initToggledContent)
  
        // Handle events
        $.each(eventSelectors, function (idx, eventSelector) {
          $container.on('click.' + selectors.namespace, eventSelector, deferred)
        })
  
        // Any already :checked on init?
        if ($controls.is(':checked')) {
          $controls.filter(':checked').each(deferred)
        }
      }
  
      // Get event selectors for all radio groups
      function getEventSelectorsForRadioGroups () {
        var radioGroups = []
  
        // Build an array of radio group selectors
        return $(selectors.radio).map(function () {
          var groupName = $(this).attr('name')
  
          if ($.inArray(groupName, radioGroups) === -1) {
            radioGroups.push(groupName)
            return 'input[type="radio"][name="' + $(this).attr('name') + '"]'
          }
          return null
        })
      }
  
      // Set up radio show/hide content for container
      self.showHideRadioToggledContent = function ($container) {
        init($container, selectors.radio, getEventSelectorsForRadioGroups(), handleRadioContent)
      }
  
      // Set up checkbox show/hide content for container
      self.showHideCheckboxToggledContent = function ($container) {
        init($container, selectors.checkbox, [selectors.checkbox], handleCheckboxContent)
      }
  
      // Remove event handlers
      self.destroy = function ($container) {
        $container = $container || $(document.body)
        $container.off('.' + selectors.namespace)
      }
    }
  
    ShowHideContent.prototype.init = function ($container) {
      this.showHideRadioToggledContent($container)
      this.showHideCheckboxToggledContent($container)
    }
  
    GOVUK.ShowHideContent = ShowHideContent
    global.GOVUK = GOVUK
  })(window)
  
  $(document).ready(function() {
    new GOVUK.ShowHideContent();
  })


  // Get user media

  /*
*  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/

// This code is adapted from
// https://rawgit.com/Miguelao/demos/master/mediarecorder.html

'use strict';


/* globals MediaRecorder */

var mediaSource = new MediaSource();
mediaSource.addEventListener('sourceopen', handleSourceOpen, false);
var mediaRecorder;
var recordedBlobs;
var sourceBuffer;

var gumVideo = document.querySelector('video#gum');
var recordedVideo = document.querySelector('video#recorded');

var recordButton = document.querySelector('button#record');
var playButton = document.querySelector('button#play');
var downloadButton = document.querySelector('button#download');
var submitButton = document.querySelector('button#submitvideo');
var retakeButton = document.querySelector('a#retakevideo');
recordButton.onclick = toggleRecording;
playButton.onclick = play;
downloadButton.onclick = download;
submitButton.onclick = showUploader;
retakeButton.onclick = resetVideo;

// window.isSecureContext could be used for Chrome
var isSecureOrigin = location.protocol === 'https:' ||
    location.hostname === 'localhost';
if (!isSecureOrigin) {
    alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
        '\n\nChanging protocol to HTTPS');
    location.protocol = 'HTTPS';
}

var constraints = {
    audio: true,
    video: {
        width: 640,
        height:480,
        frameRate: {ideal: 30, min:20}
    }
};

function handleSuccess(stream) {
    recordButton.disabled = false;
    window.stream = stream;
    gumVideo.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
then(handleSuccess).catch(handleError);

function handleSourceOpen(event) {
    console.log('MediaSource opened');
    sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
    console.log('Source buffer: ', sourceBuffer);
}

recordedVideo.addEventListener('error', function(ev) {
    console.error('MediaRecording.recordedMedia.error()');
    alert('Your browser can not play\n\n' + recordedVideo.src
        + '\n\n media clip. event: ' + JSON.stringify(ev));
}, true);

function handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
    }
}

function handleStop(event) {
    console.log('Recorder stopped: ', event);
}

function toggleRecording() {
    if (recordButton.textContent === 'Start recording') {
        playSound();
        setTimeout(function(){
            startRecording();
        }, 500)
    } else {
        stopRecording();
        recordButton.textContent = 'Start recording';
        playButton.disabled = false;
        downloadButton.disabled = false;
        playSound();
    }
}

function startRecording() {
    recordedBlobs = [];
    var options = {mimeType: 'video/mp4'};
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + ' is not Supported');
        options = {mimeType: 'video/webm;codecs=vp8'};
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(options.mimeType + ' is not Supported');
            options = {mimeType: 'video/webm'};
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                console.log(options.mimeType + ' is not Supported');
                options = {mimeType: ''};
            }
        }
    }
    try {
        mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e) {
        console.error('Exception while creating MediaRecorder: ' + e);
        alert('Exception while creating MediaRecorder: '
            + e + '. mimeType: ' + options.mimeType);
        return;
    }
    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    recordButton.textContent = 'Stop recording';
    recordButton.className += " button--recording";
    playButton.disabled = true;
    downloadButton.disabled = true;
    mediaRecorder.onstop = handleStop;
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start(10); // collect 10ms of data
    console.log('MediaRecorder started', mediaRecorder);
}

function stopRecording() {
    mediaRecorder.stop();
    recordButton.className = "button";
    showPrep();
    console.log('Recorded Blobs: ', recordedBlobs);
    recordedVideo.controls = false;
}

function playSound() {
    var sound = document.getElementById("audio");
    sound.volume = 0.2;
    sound.play();
}

function showPrep() {
    activateLoader(1);
    document.getElementById('camera-container').style.display = "none";
    document.getElementById('scan-id-3').style.display = "block";
    setTimeout(function(){
        playButton.click();
    }, 2000)
}

function showUploader() {
    mute();
    uploadLoader2(2);
    document.getElementById("spinner-heading").innerHTML = "Uploading your video";
    document.getElementById("progressbar-heading").innerHTML = "Uploading your video";
    document.getElementById('scan-id-5').style.display = "none";
    document.getElementById('scan-id-3').style.display = "block";
}

function resetVideo() {
    mute();
    console.log("reset");
    document.getElementById('scan-id-5').style.display = "none";
    document.getElementById('camera-container').style.display = "block";
}

function mute() {
    console.log(recordedVideo)
    recordedVideo.ontimeupdate = function() {
        recordedVideo.currentTime = 0;
        recordedVideo.ontimeupdate = function() {
            delete recordedVideo.ontimeupdate;
            recordedVideo.pause();
        };
    };
}

function play() {
    var superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
    recordedVideo.src = window.URL.createObjectURL(superBuffer);
    // workaround for non-seekable video taken from
    // https://bugs.chromium.org/p/chromium/issues/detail?id=642012#c23
    recordedVideo.addEventListener('loadedmetadata', function() {
        if (recordedVideo.duration === Infinity) {
            recordedVideo.currentTime = 1e101;
            recordedVideo.ontimeupdate = function() {
                recordedVideo.currentTime = 0;
                recordedVideo.ontimeupdate = function() {
                    delete recordedVideo.ontimeupdate;
                    recordedVideo.play();
                };
            };
        }
    });
}

function download() {
    var blob = new Blob(recordedBlobs, {type: 'video/webm'});
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 100);
}

// Logging utility function.
function trace(arg) {
    var now = (window.performance.now() / 1000).toFixed(3);
    console.log(now + ': ', arg);
}


// cookie banner

function setCookieBanner () {

    var cookieBannerSuccess = document.querySelector('.nhsuk-success-banner');

    if (document.cookie.indexOf("cookiePreference=") >= 0) {
        document.getElementById('nhsuk-cookie-banner').style.display = "none";
    } else {
        document.getElementById('nhsuk-cookie-banner').style.display = "block";
        document.getElementById("nhsuk-cookie-banner__link_accept").addEventListener("click", function(){
        
        document.cookie = "cookiePreference = 1;";
        document.querySelector('.nhsuk-cookie-banner').style.display = "none";
        cookieBannerSuccess.style.display = "block";
        });
    }
}

function clickCookieSuccess () {
    var cookieBannerSuccess = document.querySelector('.nhsuk-success-banner');

    if(cookieBannerSuccess) {
        cookieBannerSuccess.addEventListener()
    }
}

function deleteCookie () {

    document.cookie = "cookiePreference= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  
}

//exif 

(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {
        global.EXIF = EXIF;
    }

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (var n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (typeof define === 'function' && define.amd) {
        define('exif-js', [], function() {
            return EXIF;
        });
    }
}.call(this));



