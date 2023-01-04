import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
// import objeto from './objeto_teste.obj'
import objeto_gltf from './objeto_teste.gltf'
import React from "react";
import './Tresde.css';

export default class Tresde extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {scrollY:0, camera:{x:0,y:20,z:60}, pickPosition:{x:0,y:0}}
        this.scene = new THREE.Scene();
        this.anim = this.anim.bind(this)
        this.setUpCamera = this.setUpCamera.bind(this)
        this.setUpLights = this.setUpLights.bind(this)
        this.makeBoxInstance = this.makeBoxInstance.bind(this)
        this.setUpFog = this.setUpFog.bind(this)
        this.setupControls = this.setupControls.bind(this)
        this.onScroll = this.onScroll.bind(this)
        this.setPickPosition = this.setPickPosition.bind(this)
        this.clearPickPosition = this.clearPickPosition.bind(this)
        this.loadMyObj = this.loadMyObj.bind(this)
        this.setState = this.setState.bind(this)
        // this.createPyramid = this.createPyramid.bind(this)
    }

    main(){
        const canvas = document.querySelector(".canvas")
        this.renderer = new THREE.WebGLRenderer({canvas});
        this.renderer.shadowMap.enabled = true;
    }

    setUpFog(){
        const color = 0x000000;
        const near = 0.1;
        const far = 70;
        this.scene.fog = new THREE.Fog(color, near, far);
        this.scene.background = new THREE.Color(color)
    }

    setUpCamera(){
        const canvas = this.renderer.domElement;
        const fov = 45;
        const aspect = canvas.clientWidth / canvas.clientHeight;  // the canvas default
        const near = 0.1;
        const far = 70;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(this.state.camera.x,this.state.camera.y,this.state.camera.z)
        // camera.lookAt(0,0,0)
        this.camera = camera
    }

    createPlane(){
        const color = '#ffec42'
        const width = 80;  // ui: width
        const height = 100;  // ui: height
        const pGeometry = new THREE.PlaneGeometry(width, height);
        const planeMaterial = new THREE.MeshPhongMaterial({color})
        const plano = new THREE.Mesh(pGeometry, planeMaterial);
        plano.receiveShadow = true;
        plano.position.set(0,0,-8)
        plano.name = "plano"
        this.scene.add(plano)
    }

    createBox(){
        const dim1 = {
            w:5,
            h:5,
            d:5
        }
        const dim2 = {
            w:4,
            h:4,
            d:4
        }
        const dim3 = {
            w:3,
            h:3,
            d:3
        }

        //ffec42 amarelo forjatech
        this.cubes = [
            this.makeBoxInstance('#ff0000', 3,10,0, dim1),
            this.makeBoxInstance('#00ff00', -3,-5,-5, dim2),
            this.makeBoxInstance('#0000ff', 0,-20,0, dim3),
        ]
    }
    
    makeBoxInstance(color, positionX, positionY, positionZ, dimensions){
        let {w,h,d} = dimensions;
        const boxGeometry = new THREE.BoxGeometry(w, h, d);
        const material = new THREE.MeshPhongMaterial({color:color});
        const cube = new THREE.Mesh(boxGeometry, material);
        cube.castShadow = true;
        cube.receiveShadow = true;
        cube.position.x = positionX;
        cube.position.y = positionY;
        cube.position.z = positionZ;
        this.scene.add(cube)
        return cube;
    }

    // createPyramid(){
    //     const vertex1 = new THREE.Vector3(0, 1, 0);
    //     const vertex2 = new THREE.Vector3(-1, -1, 1);
    //     const vertex3 = new THREE.Vector3(1, -1, 1);
    //     const vertex4 = new THREE.Vector3(1, -1, -1);
    //     const vertex5 = new THREE.Vector3(-1, -1, -1);

    //     // crie uma geometria da pirâmide usando os vértices
    //     const geometry = new THREE.Geometry();
    //     geometry.vertices.push(vertex1, vertex2, vertex3, vertex4, vertex5);

    //     // crie os faces da pirâmide usando os vértices
    //     geometry.faces.push(new THREE.Face3(0, 1, 2));
    //     geometry.faces.push(new THREE.Face3(0, 2, 3));
    //     geometry.faces.push(new THREE.Face3(0, 3, 4));
    //     geometry.faces.push(new THREE.Face3(0, 4, 1));
    //     geometry.faces.push(new THREE.Face3(1, 4, 3));
    //     geometry.faces.push(new THREE.Face3(1, 3, 2));

    //     const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    //     const pyramid = new THREE.Mesh(geometry, material);

    //     this.scene.add(pyramid);
    // }

    setUpLights(){
        const shadowResolution = 2048
        const colorOne = 0xFFFFFF;
        const colorTwo = 0xFFFFFF;
        const intensityOne = 5;
        const intensityTwo = 10;

        this.lightOne = new THREE.AmbientLight(colorOne, intensityOne);
        this.lightOne.position.set(0,0,0)
        this.scene.add(this.lightOne);

        this.point = new THREE.PointLight(colorTwo, intensityTwo);
        this.point.castShadow = true;
        this.point.shadow.mapSize.height = shadowResolution;
        this.point.shadow.mapSize.width = shadowResolution;
        this.point.position.set(5,0,10);
        this.scene.add(this.point);

        // const helper = new THREE.PointLightHelper(this.point);
        // this.scene.add(helper);

    }
    
    anim(time){
        time *= 0.001;  // convert time to seconds
        const canvas = this.renderer.domElement;
        const pickHelper = new PickHelper();
        
        if(this.resizeRendererToDisplaySize(this.renderer)){
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix()
        }

        this.cubes.forEach((cube, index) => {
            if(index === 0 || index === 2){
                cube.rotation.x = time * 0.03;
                cube.rotation.y = time * 0.1;
            } else {
                cube.rotation.y = time * 0.3;
            }
        })

        this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        this.camera.updateProjectionMatrix()
        pickHelper.pick(this.state.pickPosition, this.scene, this.camera, time)
        this.renderer.render(this.scene, this.camera);
        
        requestAnimationFrame(this.anim);
    }

    setupControls(){
        const controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.enableRotate = false;
        controls.enableZoom = false;
        controls.enablePan = false;

        this.controls = controls;
    }

    resizeRendererToDisplaySize(renderer) {
        const canvas = this.renderer.domElement;
        // const pixelRatio = window.devicePixelRatio;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          this.renderer.setSize(width, height, false);
        }
        return needResize;
    }

    getCanvasRelativePosition(event) {
        const canvas = this.renderer.domElement;
        const rect = canvas.getBoundingClientRect();
        return {
            x: (event.clientX - rect.left) * canvas.width  / rect.width,
            y: (event.clientY - rect.top ) * canvas.height / rect.height,
        };
    }
    
    setPickPosition(e){
        const canvas = this.renderer.domElement;
        const pos = this.getCanvasRelativePosition(e)
        this.setState({pickPosition:{
            x: (pos.x / canvas.width) * 2 - 1,
            y: (pos.y / canvas.height) * -2 + 1
        }})
    }

    clearPickPosition() {
        const resetx = 0;
        const resety = 0;
        this.setState({pickPosition:{x:resetx, y:resety}})
    }

    componentDidMount(){
        this.main()
        this.setUpCamera()
        this.createBox()
        this.setUpLights()
        this.setUpFog()
        this.loadMyObj()
        this.anim()
        this.createPlane()
        this.setupControls()
        this.clearPickPosition()
        // this.createPyramid()

        this.renderer.render(this.scene, this.camera)
        window.addEventListener("scroll", this.onScroll)
        window.addEventListener('mousemove', this.setPickPosition)
        window.addEventListener('moseleave', this.clearPickPosition)
        window.addEventListener('mouseout', this.clearPickPosition)

        window.addEventListener('touchstart', (event) => {
        // prevent the window from scrolling
        // event.preventDefault();
        this.setPickPosition(event.touches[0]);
        }, {passive: false});
        
        window.addEventListener('touchmove', (event) => {
        this.setPickPosition(event.touches[0]);
        });
        
        window.addEventListener('touchend', this.clearPickPosition);
    }

    componentDidUpdate(){
        if(this.state.scrollY > -1){
            this.camera.position.set(this.state.camera.x, this.state.camera.y,this.state.camera.z)
        }
    }

    onScroll(e){
        const n = -0.08
        let scrollY = e.path[1].scrollY
        let modified = 20 + (scrollY * n)
        this.setState({scrollY: scrollY, camera:{x:this.state.camera.x, y:modified, z: this.state.camera.z}})
    }

    loadMyObj(){
        // const objLoader = new OBJLoader();
        // objLoader.load(objeto, (root) => {
        //     this.scene.add(root);
        // });

        const gltfLoader = new GLTFLoader();
        const url = objeto_gltf;
        gltfLoader.load(url, (gltf) => {
            const root = gltf.scene;
            this.scene.add(root);
        });
    }
    
    render() {
        return (
            <>
            <canvas className="canvas"></canvas>
            </>
        )
    }
}

class PickHelper {
    constructor() {
      this.raycaster = new THREE.Raycaster();
      this.pickedObject = null;
      this.pickedObjectSavedColor = 0;
    }
    pick(normalizedPosition, scene, camera, time) {
      // restore the color if there is a picked object
      if (this.pickedObject) {
        this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
        this.pickedObject = undefined;
      }
   
      // cast a ray through the frustum
      this.raycaster.setFromCamera(normalizedPosition, camera);
      // get the list of objects the ray intersected
      const intersectedObjects = this.raycaster.intersectObjects(scene.children);
      if (intersectedObjects.length) {
        // pick the first object. It's the closest one
        this.pickedObject = intersectedObjects[0].object;
        // save its color
        this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
        // set its emissive color to flashing red/yellow
        this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xFFFFFF : 0xFF0000);
        if(this.pickedObject.name !== 'plano'){
            this.pickedObject.rotation.y = time * 4
            console.log(this.pickedObject.isObject3D)
        }
      }
    }
}