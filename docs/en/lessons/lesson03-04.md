# Lesson 3-4: Fusion Basics & Pen Holder Creation

## Goals

- Learn the basic operations of Fusion 360 (viewport controls, solid creation, sketching)
- Design and model a pen holder, then export as `.f3d` and `.stl` files
- (Optional) Design an original pen holder and 3D print it

---

## Part 1: Fusion 360 Basics

### 1-1. Starting Fusion & Mouse Controls

1. Launch Fusion 360 and create a new project
2. Practice basic mouse controls:
   - **Middle-click drag**: Pan the viewport
   - **Scroll wheel**: Zoom in/out
   - **Shift + middle-click drag**: Orbit the viewport
   - Click the **ViewCube** (top-right) to snap to standard views

### 1-2. Creating Cuboids & Cylinders

**Create a cuboid:**
1. Select **Solid → Create → Box**
2. Click the origin as the base point
3. Enter: Width **25 mm**, Depth **25 mm**, Height **25 mm**

**Create a cylinder:**
1. Select **Solid → Create → Cylinder**
2. Enter: Diameter **50 mm**, Height **15 mm**

### 1-3. Combine & Cut Bodies

- **Combine**: Merge two bodies into one using **Solid → Modify → Combine** (Join operation)
- **Cut**: Create holes by combining with Cut operation

### 1-4. Feature Timeline & Editing

- Double-click any feature in the timeline to edit its parameters
- Changes propagate automatically to subsequent operations

### 1-5. Sketching

- Draw 2D shapes using Line, Spline, Circle, Arc tools
- Use Trim, Offset, Mirror, Circular Pattern, Rectangular Pattern
- Use **Extrude** to convert sketches into 3D bodies

### 1-6. File Export

- **`.f3d`**: Fusion native format (editable)
- **`.stl`**: Mesh format for 3D printing

---

## Part 2: Pen Holder Creation

1. Create a box: **75 × 70 × 100 mm**
2. Hollow it out with **2 mm** wall thickness using Offset + Extrude Cut
3. Cut the front at an angle (45 mm down, 35 mm across)
4. Engrave text on the front face (**1 mm** depth)
5. Add fillets to edges
6. Export as `.f3d` and `.stl`
