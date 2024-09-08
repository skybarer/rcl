import { keyframes } from 'styled-components';

// Animation 1: Breathe
export const BreatheAnimation = keyframes`
    0%   { height: 100px; width: 100px; }
    30%  { height: 400px; width: 400px; opacity: 1 }
    40%  { height: 405px; width: 405px; opacity: 0.3; }
    100% { height: 100px; width: 100px; opacity: 0.6; }
 `;

// Animation 1: Pulse
export const PulseAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

// Animation 2: Spin
export const SpinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Animation 3: FadeInOut
export const FadeInOutAnimation = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

// Animation 4: Bounce
export const BounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
`;

// Animation 6: Shake
export const ShakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  25%, 75% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
`;

// Animation 7: Pop
export const PopAnimation = keyframes`
  0% { transform: scale(0.8); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

// Animation 8: SlideIn
export const SlideInAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

// Animation 9: SlideOut
export const SlideOutAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

// Animation 10: Flip
export const FlipAnimation = keyframes`
  0% { transform: perspective(400px) rotateY(0deg); }
  100% { transform: perspective(400px) rotateY(180deg); }
`;

// Animation 11: Jelly
export const JellyAnimation = keyframes`
  0%, 100% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
`;

// Animation 12: Wobble
export const WobbleAnimation = keyframes`
  0% { transform: translateX(0%); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
  100% { transform: translateX(0%); }
`;

// Animation 13: RubberBand
export const RubberBandAnimation = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
  100% { transform: scale(1); }
`;

// Animation 14: FadeUp
export const FadeUpAnimation = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Animation 15: FadeDown
export const FadeDownAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Animation 16: FadeLeft
export const FadeLeftAnimation = keyframes`
  0% { opacity: 0; transform: translateX(20px); }
  100% { opacity: 1; transform: translateX(0); }
`;

// Animation 17: FadeRight
export const FadeRightAnimation = keyframes`
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
`;

// Animation 18: Glow
export const GlowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.7); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 1); }
`;

// Animation 19: Blinking
export const BlinkingAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Animation 20: Heartbeat
export const HeartbeatAnimation = keyframes`
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
`;

// Animation 21: ZoomIn
export const ZoomInAnimation = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

// Animation 22: ZoomOut
export const ZoomOutAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(0); }
`;

// Animation 23: Stretch
export const StretchAnimation = keyframes`
  0% { transform: scaleX(1); }
  50% { transform: scaleX(1.5); }
  100% { transform: scaleX(1); }
`;

// Animation 24: Flash
export const FlashAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

// Animation 25: SlideUp
export const SlideUpAnimation = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
`;

// Animation 26: SlideDown
export const SlideDownAnimation = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

// Animation 27: BounceIn
export const BounceInAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  60% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); }
`;

// Animation 28: BounceOut
export const BounceOutAnimation = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.05); }
  100% { transform: scale(0.5); opacity: 0; }
`;

// Animation 29: Ripple
export const RippleAnimation = keyframes`
  0% { width: 10px; height: 10px; opacity: 1; }
  100% { width: 100px; height: 100px; opacity: 0; }
`;

// Animation 30: ShrinkGrow
export const ShrinkGrowAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.8); }
  100% { transform: scale(1); }
`;

// Animation 31: Float
export const FloatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// Animation 32: Swinging
export const SwingingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

// Animation 33: Twist
export const TwistAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

// Animation 34: GrowShrink
export const GrowShrinkAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

// Animation 35: Wave
export const WaveAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
`;

// Animation 36: Blip
export const BlipAnimation = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(0.8); opacity: 1; }
`;

// Animation 37: Skew
export const SkewAnimation = keyframes`
  0% { transform: skew(0deg); }
  50% { transform: skew(20deg); }
  100% { transform: skew(0deg); }
`;

// Animation 38: RollIn
export const RollInAnimation = keyframes`
  0% { transform: translateX(-100%) rotate(-120deg); opacity: 0; }
  100% { transform: translateX(0) rotate(0deg); opacity: 1; }
`;

// Animation 39: RollOut
export const RollOutAnimation = keyframes`
  0% { transform: translateX(0) rotate(0deg); opacity: 1; }
  100% { transform: translateX(100%) rotate(120deg); opacity: 0; }
`;

// Animation 40: StretchOut
export const StretchOutAnimation = keyframes`
  0% { transform: scaleX(1); }
  50% { transform: scaleX(1.2); }
  100% { transform: scaleX(1); }
`;

// Animation 41: StretchIn
export const StretchInAnimation = keyframes`
  0% { transform: scaleY(1); }
  50% { transform: scaleY(0.8); }
  100% { transform: scaleY(1); }
`;

// Animation 42: Flicker
export const FlickerAnimation = keyframes`
  0%, 100% { opacity: 1; }
  30% { opacity: 0.4; }
  60% { opacity: 0.6; }
`;

// Animation 43: BounceLeft
export const BounceLeftAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-20px); }
  100% { transform: translateX(0); }
`;

// Animation 44: BounceRight
export const BounceRightAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(0); }
`;

// Animation 45: Drop
export const DropAnimation = keyframes`
  0% { transform: translateY(-100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

// Animation 46: Expand
export const ExpandAnimation = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

// Animation 47: Contract
export const ContractAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(0); }
`;

// Animation 48: Twinkle
export const TwinkleAnimation = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

// Animation 49: ExpandUp
export const ExpandUpAnimation = keyframes`
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
`;

// Animation 50: ExpandDown
export const ExpandDownAnimation = keyframes`
  0% { transform: scaleY(1); }
  100% { transform: scaleY(0); }
`;

// Animation 52: RotateX
export const RotateXAnimation = keyframes`
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(360deg); }
`;

// Animation 53: RotateY
export const RotateYAnimation = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

// Animation 54: StretchHorizontal
export const StretchHorizontalAnimation = keyframes`
  0% { transform: scaleX(1); }
  50% { transform: scaleX(1.5); }
  100% { transform: scaleX(1); }
`;

// Animation 55: StretchVertical
export const StretchVerticalAnimation = keyframes`
  0% { transform: scaleY(1); }
  50% { transform: scaleY(1.5); }
  100% { transform: scaleY(1); }
`;

// Animation 56: FadeDiagonal
export const FadeDiagonalAnimation = keyframes`
  0% { opacity: 0; transform: translate(-50px, -50px); }
  100% { opacity: 1; transform: translate(0, 0); }
`;

// Animation 57: ColorShift
export const ColorShiftAnimation = keyframes`
  0% { background-color: red; }
  50% { background-color: blue; }
  100% { background-color: red; }
`;

// Animation 58: ScaleUp
export const ScaleUpAnimation = keyframes`
  0% { transform: scale(0.5); }
  100% { transform: scale(1.5); }
`;

// Animation 59: ScaleDown
export const ScaleDownAnimation = keyframes`
  0% { transform: scale(1.5); }
  100% { transform: scale(0.5); }
`;

// Animation 60: PopOut
export const PopOutAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
`;

// Animation 61: PopIn
export const PopInAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

// Animation 62: Spiral
export const SpiralAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  100% { transform: rotate(360deg) scale(0); }
`;

// Animation 63: BlurIn
export const BlurInAnimation = keyframes`
  0% { filter: blur(10px); opacity: 0; }
  100% { filter: blur(0px); opacity: 1; }
`;

// Animation 64: BlurOut
export const BlurOutAnimation = keyframes`
  0% { filter: blur(0px); opacity: 1; }
  100% { filter: blur(10px); opacity: 0; }
`;

// Animation 65: FlipX
export const FlipXAnimation = keyframes`
  0% { transform: rotateX(0); }
  100% { transform: rotateX(180deg); }
`;

// Animation 66: FlipY
export const FlipYAnimation = keyframes`
  0% { transform: rotateY(0); }
  100% { transform: rotateY(180deg); }
`;

// Animation 67: RotateZ
export const RotateZAnimation = keyframes`
  0% { transform: rotateZ(0deg); }
  100% { transform: rotateZ(360deg); }
`;

// Animation 68: ScaleBounce
export const ScaleBounceAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.25); }
`;

// Animation 69: SlideDiagonal
export const SlideDiagonalAnimation = keyframes`
  0% { transform: translate(-100px, -100px); }
  100% { transform: translate(0, 0); }
`;

// Animation 70: FadeRotate
export const FadeRotateAnimation = keyframes`
  0% { opacity: 0; transform: rotate(0deg); }
  100% { opacity: 1; transform: rotate(360deg); }
`;

// Animation 71: BlinkScale
export const BlinkScaleAnimation = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0; }
`;

// Animation 72: BounceTwist
export const BounceTwistAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(180deg); }
  100% { transform: translateY(0) rotate(360deg); }
`;

// Animation 73: Shimmer
export const ShimmerAnimation = keyframes`
  0% { background-position: -100%; }
  100% { background-position: 100%; }
`;

// Animation 74: WaveVertical
export const WaveVerticalAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-10px); }
  75% { transform: translateY(10px); }
`;

// Animation 75: SkewX
export const SkewXAnimation = keyframes`
  0% { transform: skewX(0deg); }
  100% { transform: skewX(20deg); }
`;

// Animation 76: SkewY
export const SkewYAnimation = keyframes`
  0% { transform: skewY(0deg); }
  100% { transform: skewY(20deg); }
`;

// Animation 77: Drift
export const DriftAnimation = keyframes`
  0% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(-10px); }
`;

// Animation 78: ScaleFade
export const ScaleFadeAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
`;

// Animation 79: StretchDiagonal
export const StretchDiagonalAnimation = keyframes`
  0% { transform: scale(1, 1); }
  50% { transform: scale(1.5, 0.5); }
  100% { transform: scale(1, 1); }
`;

// Animation 80: FlashScale
export const FlashScaleAnimation = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.8); opacity: 0.5; }
`;

// Animation 81: SwingX
export const SwingXAnimation = keyframes`
  0% { transform: rotateX(0deg); }
  50% { transform: rotateX(20deg); }
  100% { transform: rotateX(0deg); }
`;

// Animation 82: SwingY
export const SwingYAnimation = keyframes`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(20deg); }
  100% { transform: rotateY(0deg); }
`;

// Animation 83: PulseOpacity
export const PulseOpacityAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

// Animation 84: ScaleRotate
export const ScaleRotateAnimation = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.5) rotate(180deg); }
  100% { transform: scale(1) rotate(360deg); }
`;

// Animation 85: ShiftLeft
export const ShiftLeftAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50px); }
`;

// Animation 86: ShiftRight
export const ShiftRightAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(50px); }
`;

// Animation 87: SlideShrink
export const SlideShrinkAnimation = keyframes`
  0% { transform: translateX(0) scale(1); }
  100% { transform: translateX(50px) scale(0.5); }
`;

// Animation 88: ZoomBlink
export const ZoomBlinkAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

// Animation 89: PushDown
export const PushDownAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
`;

// Animation 90: PushUp
export const PushUpAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50px); }
`;

// Animation 91: ScaleFlash
export const ScaleFlashAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); opacity: 0.5; }
`;

// Animation 92: SlideUpFade
export const SlideUpFadeAnimation = keyframes`
  0% { transform: translateY(50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

// Animation 93: SlideDownFade
export const SlideDownFadeAnimation = keyframes`
  0% { transform: translateY(-50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

// Animation 94: ZoomSpin
export const ZoomSpinAnimation = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1.5) rotate(360deg); }
`;

// Animation 95: Sway
export const SwayAnimation = keyframes`
  0% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  100% { transform: translateX(-5px); }
`;

// Animation 96: PushBack
export const PushBackAnimation = keyframes`
  0% { transform: translateZ(0); }
  100% { transform: translateZ(-200px); }
`;

// Animation 97: PulseRotate
export const PulseRotateAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`;

// Animation 98: ExpandCollapse
export const ExpandCollapseAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.5); }
`;

// Animation 99: PushPull
export const PushPullAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-20px); }
  100% { transform: translateX(0); }
`;

// Animation 100: BounceOpacity
export const BounceOpacityAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

// Animation 101: Ripple
// export const RippleAnimation = keyframes`
//   0% { transform: scale(0.8); opacity: 1; }
//   100% { transform: scale(2); opacity: 0; }
// `;

// Animation 102: SpinBounce
export const SpinBounceAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`;

// Animation 103: CrossFade
export const CrossFadeAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

// Animation 104: PushZoom
export const PushZoomAnimation = keyframes`
  0% { transform: translateZ(0) scale(1); }
  100% { transform: translateZ(-200px) scale(1.5); }
`;

// Animation 105: Elastic
export const ElasticAnimation = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.25); }
  50% { transform: scale(0.75); }
  100% { transform: scale(1); }
`;

// Animation 106: SlideFade
export const SlideFadeAnimation = keyframes`
  0% { transform: translateX(-50px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

// Animation 107: GlowPulse
export const GlowPulseAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
`;

// Animation 108: SlideFlip
export const SlideFlipAnimation = keyframes`
  0% { transform: translateX(-100%) rotateY(0); }
  100% { transform: translateX(0) rotateY(180deg); }
`;

// Animation 109: BounceIn
// export const BounceInAnimation = keyframes`
//   0% { transform: scale(0.5); opacity: 0; }
//   60% { transform: scale(1.1); opacity: 1; }
//   100% { transform: scale(1); }
// `;

// Animation 110: BounceOut
/* export const BounceOutAnimation = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(0.5); opacity: 0; }
`; */

// Animation 111: SlideSkew
export const SlideSkewAnimation = keyframes`
  0% { transform: skewX(0deg); }
  100% { transform: skewX(20deg); }
`;

// Animation 112: CircleExpand
export const CircleExpandAnimation = keyframes`
  0% { clip-path: circle(0% at 50% 50%); }
  100% { clip-path: circle(100% at 50% 50%); }
`;

// Animation 113: FlipFade
export const FlipFadeAnimation = keyframes`
  0% { transform: rotateY(0deg); opacity: 1; }
  100% { transform: rotateY(180deg); opacity: 0; }
`;

// Animation 114: TiltShift
export const TiltShiftAnimation = keyframes`
  0% { transform: skewX(0deg); }
  50% { transform: skewX(-10deg); }
  100% { transform: skewX(0deg); }
`;

// Animation 115: SwayRotate
export const SwayRotateAnimation = keyframes`
  0% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(-10deg); }
`;

// Animation 116: Zigzag
export const ZigzagAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(20px); }
  50% { transform: translateX(-20px); }
  75% { transform: translateX(20px); }
`;

// Animation 117: StretchGlow
export const StretchGlowAnimation = keyframes`
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.5); box-shadow: 0 0 10px #fff; }
`;

// Animation 118: SwingFade
export const SwingFadeAnimation = keyframes`
  0%, 100% { transform: rotate(0deg); opacity: 1; }
  50% { transform: rotate(-10deg); opacity: 0.5; }
`;

// Animation 119: GrowShrinkDiagonal
export const GrowShrinkDiagonalAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3) translate(20px, 20px); }
`;

// Animation 120: SpiralOut
export const SpiralOutAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  100% { transform: rotate(720deg) scale(0); }
`;

// Animation 121: BounceRotate
export const BounceRotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg) translateY(-20px); }
  100% { transform: rotate(360deg); }
`;

// Animation 122: FlashTilt
export const FlashTiltAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

// Animation 123: StretchBounce
export const StretchBounceAnimation = keyframes`
  0% { transform: scaleX(1); }
  50% { transform: scaleX(1.3); }
  100% { transform: scaleX(1); }
`;

// Animation 124: WaveDiagonal
export const WaveDiagonalAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(10px, -10px); }
  75% { transform: translate(-10px, 10px); }
`;

// Animation 125: PopUp
export const PopUpAnimation = keyframes`
  0% { transform: scale(0.8) translateY(20px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;

// Animation 126: DropShrink
export const DropShrinkAnimation = keyframes`
  0% { transform: translateY(-50px) scaleY(1); }
  100% { transform: translateY(0) scaleY(0.8); }
`;

// Animation 127: Float
/* export const FloatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`; */

// Animation 128: RotatePulse
export const RotatePulseAnimation = keyframes`
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
`;

// Animation 129: ExpandRotate
export const ExpandRotateAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  100% { transform: rotate(360deg) scale(1.5); }
`;

// Animation 130: Swipe
export const SwipeAnimation = keyframes`
  0% { transform: translateX(-50px); }
  100% { transform: translateX(50px); }
`;

// Animation 131: SpinGrow
export const SpinGrowAnimation = keyframes`
  0% { transform: rotate(0deg) scale(0.8); }
  100% { transform: rotate(360deg) scale(1.2); }
`;

// Animation 132: FlickerZoom
export const FlickerZoomAnimation = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
`;

// Animation 133: StretchFade
export const StretchFadeAnimation = keyframes`
  0% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(1.5); opacity: 0.5; }
  100% { transform: scaleX(1); opacity: 1; }
`;

// Animation 134: Swing
// export const SwingAnimation = keyframes`
//   0% { transform: rotate(0deg); }
//   25% { transform: rotate(-10deg); }
//   75% { transform: rotate(10deg); }
//   100% { transform: rotate(0deg); }
// `;

// Animation 150: SlideUpGrow
export const SlideUpGrowAnimation = keyframes`
  0% { transform: translateY(20px) scale(1); }
  100% { transform: translateY(0) scale(1.2); }
`;

// Swing Animation
export const SwingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

// Spin Skew Animation
export const SpinSkewAnimation = keyframes`
  0% { transform: rotate(0deg) skew(0deg); }
  100% { transform: rotate(360deg) skew(20deg); }
`;

// Twirl Animation
export const TwirlAnimation = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(180deg); }
  100% { transform: scale(1) rotate(360deg); }
`;

// Pulse Diagonal Animation
export const PulseDiagonalAnimation = keyframes`
  0% { transform: scale(1) translateX(0); }
  50% { transform: scale(1.2) translateX(-10px); }
  100% { transform: scale(1) translateX(0); }
`;

// Shrink Bounce Animation
export const ShrinkBounceAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.8); }
  100% { transform: scale(1); }
`;

// Bounce Slide Animation
export const BounceSlideAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0) translateX(20px); }
`;

// Rotate Scale Fade Animation
export const RotateScaleFadeAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); opacity: 1; }
  100% { transform: rotate(360deg) scale(0.8); opacity: 0; }
`;

// Flip Expand Animation
export const FlipExpandAnimation = keyframes`
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(180deg) scale(1.5); }
`;

// Glide In Animation
export const GlideInAnimation = keyframes`
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

// Spin Pulse Animation
export const SpinPulseAnimation = keyframes`
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
`;

// Fade Slide Animation
export const FadeSlideAnimation = keyframes`
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
`;

// Slide Glow Animation
export const SlideGlowAnimation = keyframes`
  0% { transform: translateX(0); box-shadow: 0 0 0px #fff; }
  100% { transform: translateX(20px); box-shadow: 0 0 10px #fff; }
`;

// Pop Skew Animation
export const PopSkewAnimation = keyframes`
  0% { transform: scale(1) skew(0deg); }
  50% { transform: scale(1.2) skew(10deg); }
  100% { transform: scale(1) skew(0deg); }
`;

// Pulse Grow Animation
export const PulseGrowAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
`;

// Stretch Shift Animation
export const StretchShiftAnimation = keyframes`
  0% { transform: translateX(0) scaleX(1); }
  50% { transform: translateX(20px) scaleX(1.5); }
  100% { transform: translateX(0) scaleX(1); }
`;

// Collapse Expand Animation
export const CollapseExpandAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.8); }
  100% { transform: scale(1); }
`;

//  const Circle = styled.div`
//    height: 100px;
//    width: 100px;
//    border-style: solid;
//    border-width: 5px;
//    border-radius: 50%;
//    border-color: black;
//    animation-name: ${breatheAnimation};
//    animation-duration: 8s;
//    animation-iteration-count: infinite;
//  `;
//  const Container = styled.div`
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    flex-direction: column;
//    height: 450px;
//  `;
