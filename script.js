// Calm water ripple effect
$('body').ripples({
  resolution: 256,
  dropRadius: 25,
  perturbance: 0.00, // subtle water effect
  interactive: false
});

// Gentle ripple on hover
$(document).on('mousemove', function (e) {
  let $el = $('body');
  let x = e.pageX;
  let y = e.pageY;
  $el.ripples('drop', x, y, 10, 0.02);
});

// Particle.js config
particlesJS('particles-js', {
  particles: {
    number: { value: 40 },
    color: { value: ['#03e9f4', '#8a2be2', '#ffffff'] },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 2 },
    move: { enable: true, speed: 0.5 }
  }
});

// Dim background behind login panel on input focus or typing
$(document).ready(function () {
  const $body = $('body');
  const $inputs = $('.login-box input[type="text"], .login-box input[type="password"]');

  function toggleDim() {
    const anyActive =
      $inputs.is(':focus') ||
      $inputs.filter(function () {
        return this.value.trim() !== '';
      }).length > 0;
    if (anyActive) {
      $body.addClass('dimmed');
    } else {
      $body.removeClass('dimmed');
    }
  }

  $inputs.on('focus input blur', toggleDim);
});
