const prompter = {
  top:0,

};

function pause(){
  clearInterval(prompter.timeout);
}

function play(speed){
  clearInterval(prompter.timeout);
  prompter.timeout = setInterval(function(){
    prompter.top += 100;
    $('.prompter').animate({
      scrollTop: prompter.top
    }, speed * 100)
  }, speed * 100);
}

function quitPrompter(){
  pause();
  const $prompter = $('.prompter');
  $prompter.scrollTop(0);
  $prompter.hide();
}

function pausePrompter(){
  pause();
  $('#resume-button').show();
  $('#pause-button').hide();
}

function playPrompter(){
  play(14 - prompter.speed);
  $('#resume-button').hide();
  $('#pause-button').show();
}

function startPrompter(){
  const $prompter = $('.prompter');
  prompter.top = 0;

  Object.assign(prompter, {
    text: $('#textContent').val(),
    speed: $('#speed').val(),
    isReverse: $('#reverse-text').val()
  });

  $('.prompt-area .text').text(prompter.text);

  playPrompter();

  $prompter.show();
}






