var calc = {
  subtotal: 0,
  last_value: 0,
  last_operator: "",
  total: 0
};

var synth = new Tone.MonoSynth({
  "portamento": 0.01,
  "oscillator": {
    "type": "square"
  },
  "envelope": {
    "attack": 0.005,
    "decay": 0.2,
    "sustain": 0.4,
    "release": 1.4,
  },
  "filterEnvelope": {
    "attack": 0.005,
    "decay": 0.1,
    "sustain": 0.05,
    "release": 0.8,
    "baseFrequency": 300,
    "octaves": 4
  }
}).toMaster();

synth.volume.value = -12;

Tone.Transport.bpm.value = 188;

var notes = {
  "pentatonic": ["C3", "D3", "E3", "G3", "A3", "C4", "D4", "E4", "G4", "A4"],
  "majorSeven": ["C3", "E3", "G3", "B3", "G2", "C4", "E4", "G4", "B4", "C5"],
  "major": ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4"],
  "halfDiminished": ["C3", "Eb3", "Gb3", "Bb3", "C4", "Eb4", "Gb4", "Bb4", "C5", "C2"]
};

var scale = notes.pentatonic;

var synthPart = new Tone.Sequence(function (time, note) {
  synth.triggerAttackRelease(note, "16n", time);
}, [scale[0], [scale[2], [scale[1], scale[3]]], scale[6], [scale[8], scale[5]]]).start(0);
synthPart.probability = 0.7;

var reverbSend = synth.send("reverb", -20);

var reverb = new Tone.Freeverb(.9, 3000)
  .receive("reverb")
  .toMaster();

function randomNote() {
  return Math.floor(Math.random() * 10); 
}

$(document).ready(function () {
  StartAudioContext(Tone.context, '#Buttons').then(function () {

  $("#Op1-BTN").click(function () {
    scale = notes.pentatonic;
    $("#Star").attr("fill", "#73416C");
    $("#Star").animate({opacity: 0.5}, 1500);
  });
  $("#Op2-BTN").click(function () {
    scale = notes.majorSeven;
    $("#btn-option2-shape").attr("fill", "#2A545F");
    $("#btn-option2-shape").animate({ opacity: 0.5 }, 1500);
  });
  $("#Op3-BTN").click(function () {
    scale = notes.major;
    $("#btn-option3-shape").attr("fill", "#8E8838");
    $("#btn-option3-shape").animate({ opacity: 0.5 }, 1500);
  });
  $("#Op4-BTN").click(function () {
    scale = notes.halfDiminished;
    $("#btn-option4-shape").attr("fill", "#935464");
    $("#btn-option4-shape").animate({ opacity: 0.5 }, 1500);
  });
  $("#Decimal-BTN").click(function () {
    console.log($("#digits").text().indexOf('.'));
    if ($("#digits").text().indexOf('.') === -1) {
      $("#digits").val($("#digits").val() + '.');
      console.log($("#digits").val());
    }
  });
  $("#On-BTN").click(function () {
    Tone.Master.mute = false;
  });
  $("#Off-BTN").click(function () {
    Tone.Master.mute = true;
    
  });
  $("#0-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 0);
  });
  $("#1-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 1);
  });
  $("#2-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 2);
  });
  $("#3-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 3);
    console.log($("#digits").val());
    console.log(calc.subtotal);

  });
  $("#4-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 4);
    console.log($("#digits").val());
  });
  $("#5-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 5);
  });
  $("#6-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 6);
  });
  $("#7-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 7);
  });
  $("#8-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 8);
    console.log($("#digits").val());
  });
  $("#9-BTN").click(function () {
    let note = randomNote();
    synth.triggerAttackRelease(scale[note], "8n");
    $("#digits").val($("#digits").val() + 9);
  });
  $("#Clear-BTN").click(function () {
    Tone.Transport.stop();
    calc.subtotal = 0;
    calc.last_value = 0;

    $("#digits").val("");
    $("#Star").attr("fill", "#FFFFFF");
    $("#Star").animate({ opacity: 1 }, 1000);
    $("#btn-option2-shape").attr("fill", "#FFFFFF");
    $("#btn-option2-shape").animate({ opacity: 1 }, 1000);
    $("#btn-option3-shape").attr("fill", "#FFFFFF");
    $("#btn-option3-shape").animate({ opacity: 1 }, 1000);
    $("#btn-option4-shape").attr("fill", "#FFFFFF");
    $("#btn-option4-shape").animate({ opacity: 1 }, 1000);
 
  });
  $("#Plus-BTN").click(function () { 
      calc.last_value = new BigNumber($("#digits").val());
      if (calc.last_value !== "") {
        calc.subtotal = new BigNumber(calc.last_value);
        $("#digits").val("");
        calc.last_operator = "+";
      } 
  });
  $("#Minus-BTN").click(function () {
    console.log(calc.last_operator);  
    calc.last_value = new BigNumber($("#digits").val());
      console.log(calc.last_operator);
      if (calc.last_value !== "") {       
        calc.subtotal = parseInt(calc.last_value);
        $("#digits").val("");
        calc.last_operator = "-";
        
      }
  });
  $("#Multiply-BTN").click(function () {
      calc.last_value = $("#digits").val();  
      if (calc.last_value !== "") {
        calc.subtotal = parseInt(calc.last_value);
        $("#digits").val("");
        calc.last_operator = "*";
      }
  });
  $("#Divide-BTN").click(function () {
      calc.last_value = $("#digits").val();
      if (calc.last_value !== "") {
        calc.subtotal = parseInt(calc.last_value);
        $("#digits").val("");
        calc.last_operator = "/";
      }
  });
  $("#Percent-BTN").click(function () {
    calc.last_value = (parseInt($("#digits").val()) / 100);
    $("#digits").val(calc.last_value);
  });
  $("#Flip-BTN").click(function () {
    calc.last_value = parseInt($("#digits").val());
    calc.last_value *= -1;
    $("#digits").val(calc.last_value);
  });
  $("#Sqrt-BTN").click(function () {
    calc.last_value = $("#digits").val();
    calc.subtotal = Math.sqrt(parseInt(calc.last_value));
    $("#digits").val(calc.subtotal);
    calc.last_operator = "*";
  });
  $("#Equals-BTN").click(function () {
    Tone.Transport.start("+0.1");
    calc.subtotal = new BigNumber(calc.last_value);
    calc.last_value = new BigNumber($("#digits").val());
    console.log(calc.subtotal, calc.last_value);
    $("#digits").val(""); 
    switch (calc.last_operator) {
      case "+":
        calc.subtotal = calc.last_value.plus(calc.subtotal);
        $("#digits").val($("#digits").val() + calc.subtotal);
        break;
      case "-":
        calc.subtotal = calc.subtotal.minus(calc.last_value);
        $("#digits").val($("#digits").val() + calc.subtotal);
        break;
      case "*":
        calc.subtotal = calc.last_value.times(calc.subtotal);
        $("#digits").val($("#digits").val() + calc.subtotal);
        break;
      case "/":
        calc.subtotal = calc.subtotal.dividedBy(calc.last_value);
        $("#digits").val($("#digits").val() + calc.subtotal);
        break;
    } 

  });
  }); // start audio context
}); //document ready 