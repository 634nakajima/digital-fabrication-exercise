# Lesson 11: Cam Mechanism

## Goals

- Understand cam mechanisms and design them in Fusion
- Understand oscillating crank mechanisms
- Convert rotary motion to reciprocating or oscillating motion

---

## 1. Cam Mechanism

A **cam** converts rotary motion into linear (up/down) motion. The cam shape determines the output motion pattern.

- **Eccentric cam**: Smooth sinusoidal motion
- **Heart-shaped cam**: Constant velocity rise and fall
- **Custom cam**: Design any motion profile with splines

## 2. Oscillating Crank

A four-bar linkage that converts rotation into oscillation:
- **Crank** → **Connecting Rod** → **Rocker** → **Frame**
- All connections use revolute joints
- Link ratios determine the oscillation angle

## 3. Comparison

| Feature | Cam | Oscillating Crank |
|---------|-----|-------------------|
| Motion freedom | Any profile via cam shape | Adjusted via link ratios |
| Part count | Few (cam + follower) | More (crank + rod + rocker) |
| Karakuri use | Up/down, nodding | Arm swinging, drumming |
