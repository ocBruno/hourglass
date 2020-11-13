import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.filmGauge = 15   
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

document.body.appendChild( renderer.domElement );

const activeColor = new THREE.Color(`rgb(15, 14, 26)`);
const bgImg = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAgACgAJ/AAD//gAQTGF2YzU1LjE4LjEwMgD/2wBDAAgKCgsKCw0NDQ0NDRAPEBAQEBAQEBAQEBASEhIVFRUSEhIQEBISFBQVFRcXFxUVFRUXFxkZGR4eHBwjIyQrKzP/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsBAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKCxAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/wAARCAHgA1QDARIAAhIAAxIA/9oADAMBAAIRAxEAPwDxairAkAooAACigAAWigAAKKAAApaAAAooAACigAAKWgAAKKAAAooAACloAACigAAKKAAAooAAFooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAAAooAACloAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKWgAAKKAABKWgAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKWgAASloAAEpaAABKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASloAAEooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAAEpaAABKKAAAooAACigAASloAAEooAACigAAKKAABKKAAAooAACigAASloAAEooAACigAASigAAKKAABKWgAASigAAKKAABKWgAAKKAAAooAAFooAACigAAKWgAAKKAAAooAACloAACigAAKKAABaKAAAooAACigAAKWgAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKWgAASloAACigAAKKAAAooAACigAAKKAAAooAACloAAEpaAABKWgAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKWgAASloAAEooAACigAAKKAAAooAACigAASloAAEooAACigAAKKAAAooAAEooAACigAAKKAAAooAAEooAACigAAKKAABKKAAAooAACigAASloAAEooAACigAASloAAEooAAEpaAABKKAAAooAACigAAWigAAKKAABaKAAAooAACloAACigAAKKAAAooAAFooAACigAAKKAAApaAAAooAACigAAKKAABaKAAAooAACigAAKKAAApaAAAooAACigAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAAAooAACigAAKKAAApaAABKWgAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKWgAASloAAEpaAABKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAASloAAEooAACigAAKKAABKWgAASigAAKKAAAooAAEpaAABKKAAAooAAEpaAABKKAAAooAAEpaAABKKAAAooAAEooAACigAASloAAEooAAFooAACigAAWigAAKKAAAooAAFooAACigAAKWgAAKKAAAooAACigAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAAApaAAAooAACigAAKKAAAooAACigAAKKAAAooAACloAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACloAAEpaAABKKAAApaAABKKAAApaAABKKAAApaAABKWgAASigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAAKKAABKWgAASigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAABKWgAASigAAKKAAAooAAEpaAABKKAAAooAAEpaAABKKAAAooAAEpaAABKKAAAooAAEpaAABKKAAAooAACigAAKWgAAKKAAAooAAFooAACigAAKKAABaKAAAooAACigAAWigAAKKAAAooAACloAACigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAAApaAAAooAACigAAKKAAAooAACigAAKWgAASloAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKWgAASloAACigAASloAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAEooAACloAAEooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAAAooAACigAASloAAEooAACigAAKKAAAooAAEpaAABKKAAAooAACigAAKKAABKKAAAooAACigAAKKAABKKAAAooAAEpaAABKKAAAooAAEpaAABKKAAAooAAEooAACigAAKKAABaKAAAooAAFooAACigAAKKAABaKAAAooAACigAAWigAAKKAAAooAACloAACigAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKWgAASloAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAApaBgAUUgAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAEpaAABKWgAASigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASloAAEooAACigAAKKAAAooAACigAAKKAAAooAAEooAACigAAKKAAAooAAEpaAABKKAAAooAACigAAKKAABKKAAAooAACigAASloAAEooAACigAASloAAEooAACigAASigAAKKAAAooAAEooAAFooAACigAAKKAABaKAAAooAAFooAACigAAKKAABaKAAAooAACigAAKWgAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKWgAASigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASloAAEpaAAAooAAEooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAEooAACigAAKKAAAooAACigAAKKAABKWgAASigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAABKKAAAooAACigAASigAAKKAAAooAAEpaAABKKAAAooAAEooAACigAAKKAAAooAACigAAWigAAKKAAAooAAFooAACigAAKWgAAKKAAAooAACigAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAEpaAABKWgAASigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAEpaAABKKAAAooAACigAAKKAAAooAAEpaAABKKAAAooAACigAAKKAABKWgAASigAAKKAAAooAAEpaAABKKAAAooAACigAASigAAKKAAAooAAEooAACigAASloAAEooAACigAAKKAAApaAAAooAACigAAWigAAKKAAAooAAFooAACigAAKKAABaSgAAWigAAKKAAAooAACloAACigAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAApaAAApKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAopiAAooAACigAAKKAAAooAACimIACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASloAAEooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAABKWgAASigAAKKAAApKAAAooAACigAASigAAKKAAAooAAEpaAABKKAAAooAAFooAACigAAKKAABaKAAAooAACloAACigAAKKAAAooAAFooAACigAAKKAAAooAAFooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABaSgAAWigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAopiAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAopiAAooAACigAAKSgAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAEpaAABKKAAAooAACigAAKKAAAooAAEooAACigAAKKAAAooAAEpaAABKKAAAooAACigAAKKAABKKAAAooAACigAASigAAKKAAAooAAEooAACigAAKKAABKKAABaKAAAooAACigAAWigAAKKAAAooAAFooAACigAAKKAAApaAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAAAooAACigAAKKAAApaAAApKAAApaAAAooAACigAAKKAAAooAACigAAKKAAAooAACimIACigAAKKAAAopgABRSAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAopiAAopiAAooAACigAAKKAAAooAACigYAFFIAAKKAAAooAAEpaAABKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAAAooAAEooAACigAAKKAAAooAAEooAACigAAKKAAAooAAEooAACigAAKKAABKWgAASigAAKKAABKKAAAooAACigAASigAAWigAAKKAAAooAAFooAACigAAKKAABaKAAAooAACigAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKWgAASloAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAopiAAooGABRSAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigYAFFIAAKKAABKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAAEpaAABKKAAAooAACigAASloAAEooAACigAAKKAAApKAAAooAACigAAKKAABKKAAAooAAEpaAABKKAAAooAAEpaAAAooAACigAAKKAABaKAAAooAAFpKAABaKAAAooAACigAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKBgAUUgAAooAACigAAKKAAAooAACigAAKKAAAopiAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAAAooAACigAASloAAEooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAABKKAAAooAACigAASigAAKKAAAooAAEooAACigAAKKAAAooAACigAAKWgAAKKAAAooAAFooAACigAAKKAAApaAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooGAC0UgAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKBgAUUgAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAApKAAApaAABKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAAEpaAABKKAAAooAACigAAKKAABKKAAAooAACigAAKKAABKWgAASigAAKKAABKKAAAooAACigAASigAAKKAAAooAACigAAKKAABaSgAAWigAAKKAABaKAAAooAACigAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAACigAAKKAABaSgAAWigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKBgAUUgAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAEpaAABKKAAAooAACigAAKKAAAooAAEooAACigAAKKAAAooAAEooAACigAAKKAAAooAAEooAACigAAKKAABKKAAAooAACigAASigAAKKAAAooAACigAAKKAAAooAAFooAACigAAWigAAKKAAAooAAFpKAABaKAAAooAACigAAKWgAAKKAAAooAACigAAWkoAAFooAACigAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooGABRSAACigAAKKAAAooAACigYAFFIAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooGABRSAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAABKWgAASigAAKKAAAooAAEooAACigAAKKAABKWgAASigAAKKAABKKAAAooAACigAAKKAAAooAACigAAWigAAKKAABaKAAAooAACigAAKKAABaKAAAooAACigAAWigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKBgAUUgAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAopiAAooAACigAAKKAAAopiAAooAACigAAKKAAAooAACigAAKKAAAooAACimIACigAAKKAAAooAACigYAFFIAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAEooAACigAAKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAAAooAAEooAACigAAKKAAAooAAEooAACigAAKKAAAooAAEooAACigAAKKAABKKAAAooAACigAASigAAKKAAAooAACigAAKKAAAooAAFooAACigAAWigAAKKAAAooAAFooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooGABRQIACigAAKKAAAooAACimIACigYAFFIAAKKAAAooAACigYAFFIAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKSgAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAABKWgAASigAAKKAAAooAACigAASigAAKKAAAooAACigAASigAAKKAAAooAAEooAACigAAKKAABKKAAAooAACkoAAFooAACigAAKKAABaKAAAooAACigAAWigAAKKAAAooAAFooAACigAAKKAAAooAAFooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooGABRSGABRSAACigAAKKYgAKKAAAooAACigAAKKAAAooGABRSAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAApKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKSgAAKKAAAooAACigAAKKAABKKAAAooAACigAASigAAKKAAAooAAEooAACigAAKSgAAKWgAAKKAAAooAAFpKAABaKAAAooAAFooAACigAAKKAAApaAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAAEooAACigAAKKAAAooAACigAAKSgAAKKAAAooAACigAASigAAKKAAAooAACigAASigAAKKAAApKAAAooAACigAASigAAKKAABaKAAAooAACigAAWigAAKKAAApaAAAooAACigAAKKAABaKAAAooAACigAAKKAABaKAAAooAACigAAKKAABaSgAAWigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigYAFFAgAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAopiAAooAACigYAFFIAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKSgAAKKBgAUUgAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAABKKAAAooAACigAASigAAKKAAAooAAEooAACigAAKKAABKKAAAooAAFooAACigAAKKAABaSgAAWigAAKKAABaKAAAooAACigAAWkoAAFooAACigAAKKAABaKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABaSgAAWigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKSgAAWkoAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAAEooAACigAAKKAAApKAAAooAACigAASigAAKKAAAooAACkoAACigAAKKAAAooAAFooAACigAAWkoAAFooAACigAAWkoAAFooAACigAAKKAABaKAAAooAACigAAKKAABaSgAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKWgAAKKAAAooAACigAAKKAAAooAACigAAKKYgAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAApKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAAApKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACkoAACigAAKKAAAooAAEooAACigAAKKAABKKAAAooAACkoAACigAAKKAAAooAACigAAWkoAAFooAACigAAWigAAKKAAAooAAFooAACigAAKKAAAooAAFooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKWgAAKSgAAWigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKYgAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAApKAAAooAACigAAKKAAAooAACigAAKSgAAKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAAEooAACigAAKKAABKKAAAooAACigAAKSgAAKKAAAooAAEooAACigAAKKAABKKAABaKAAAooAAFooAACigAAKKAABaKAAAooAACigAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAWkoAAFooAACigAAKKAAAooAACigAAKKAAAooAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAWkoAACloAACkoAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAEooAAFooAAEooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKSgAAKKAAAooAACigAAKSgAAKKAAAooAACkoAACigAAKKAABKKAAAooAACigAASigAAKKAABaSgAAWigAAKKAABaKAAAooAACigAAWigAAKKAAAooAAFooAACigAAKKAABaSgAAWigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAACigAAWkoAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAAFpKAABaSgAAKKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACkoAAFooAACigAAKKAAAooAACkoAAFooAAEooAAFpKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACigAASigAAKKAAAooAACkoAACigAAKKAAApKAAAooAACigAAKSgAAKKAAAooAAEooAACigAAKKAAAooAAFooAACigAAKKAABaKAAAooAAFpKAABaKAAAooAACigAAWigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAABaSgAAWigAAKKAAAooAACigAAWkoAAFpKAABaKAAAooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAWkoAACigAAKKAAAooAAFooAAEooAAFpKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACigAASigAAKKAAAooAACkoAACigAAKKAAAooAAEooAACigAAKSgAAKKAAAooAAEooAACigAAKKAAApKAABaKAAAooAAFooAACigAAKKAABaKAAAooAACigAAWigAAKKAAAooAAFooAACigAAKKAAAooAAFooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAAAooAACigAAWkoAAFooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAApKAABaSgAAKKAAAooAACigAAKKAAAooAACigAAKKAABKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKSgAAKKAAAooAACigAAKSgAAKKAAAooAACkoAACigAAKKAAAooAAEooAACigAAKSgAAKKAAAooAAEooAACigAAWkoAAFooAACigAAWigAAKKAAAooAAFooAACigAAKKAABaKAAAooAACigAAWkoAAFooAACigAAKKAABaSgAAWigAAKKAAAooAACigAAWigAAKKAAAooAACigAAKKAABaSgAAWkoAAFpKAABaKAAAooAACigAAKKAAAooAACigAAKKAABaSgAAWigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAASigAAKKAAAooAACigAAKKAAAooAACigAAKKAAApKAABaSgAAKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACigAASigAAKKAAAooAACigAASigAAKKAAAooAAEooAACigAAKKAAApKAAAooAACigAAKSgAAKKAAAooAAEooAACigAAKKAAAooAACigAAWigAAKKAABaSgAAWigAAKKAABaSgAAWigAAKKAABaSgAAWigAAKKAAAooAAFooAACigAAKKAABaSgAAWkoAAFooAACigAAKKAAAooAAFpKAABaKAAAooAACigAAKKAAAooAAFpKAABaSgAAWigAAKKAAAooAACigAAKKAAAooAACigAAKKAABaSgAAWkoAAFpKAABaKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACkoAACigAAWkoAACigAAKKAAAooAACigAAKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACigAAKKAAAooAACkoAACigAAKKAAAooAACigAAKSgAAKKAAAooAACigAAKSgAAKKAAAooAACigAAKSgAAKKAAAooAACkoAACigAAKKAAApKAAAooAACkoAACigAAKKAABKKAAD/2Q==`
const bgColor = new THREE.Color(`rgb(10, 10, 20)`);
const topLathePoints = [];
const loader = new THREE.TextureLoader();
const bgTexture = loader.load(bgImg)
console.log(bgTexture)

scene.background = bgColor
// Uncomment below line for silllhoute mode
// scene.fog = new THREE.Fog(new THREE.Color(`rgb(0,0,0)`), 0.0025, 20);

for ( let i = 0; i < 10; i ++ ) {
    topLathePoints.push( new THREE.Vector2( Math.sin( i * 0.20 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const bottomLathePoints = [];

for ( let i = -10; i <= 0; i ++ ) {
    bottomLathePoints.push( new THREE.Vector2( Math.sin( i * 0.20 ) * -10 + 5, ( i - 5 ) * 2 ) );
}
const bottomWaterPoints = [], topWaterPoints = [];

for ( let i = 0; i < 5; i ++ ) {
topWaterPoints.push( new THREE.Vector2( Math.sin( i * 0.20 ) * 9 + 4, ( i - 4.8 ) * 1.8 - 1.8 ) );
}

for ( let i = -10; i <= 0; i ++ ) {
    bottomWaterPoints.push( new THREE.Vector2( Math.sin( i * 0.2 ) * -9.6 + 4.5, ( i - 5.5 ) * 2 + 1) );
}

const topCylinderGeometry = new THREE.CylinderGeometry( 20, 20, 4, 64 );
const topCylinderMaterial = new THREE.MeshStandardMaterial( {color: new THREE.Color(`rgb(0, 50, 90)`)} );
const topCylinder = new THREE.Mesh( topCylinderGeometry, topCylinderMaterial );

topCylinder.position.y += 10

scene.add( topCylinder );

const bottomCylinderGeometry = new THREE.CylinderGeometry( 20, 20, 3, 64 );
const bottomCylinderMaterial = new THREE.MeshStandardMaterial( {color: new THREE.Color(`rgb(0, 50, 90)`)} );
const bottomCylinder = new THREE.Mesh( bottomCylinderGeometry, bottomCylinderMaterial );

bottomCylinder.position.y -= 30

scene.add( bottomCylinder );

const topLatheGeometry = new THREE.LatheGeometry( topLathePoints, 30 );
const bottomLatheGeometry = new THREE.LatheGeometry( bottomLathePoints, 30 );
const topWaterGeometry = new THREE.LatheGeometry( topWaterPoints, 30 );
const bottomWaterGeometry = new THREE.LatheGeometry( bottomWaterPoints, 30 );
const fullLatheGeometry = new THREE.Geometry()

const latheMaterial =  new THREE.MeshPhongMaterial({
    color: new THREE.Color(`rgb(220, 220, 250)`),
    opacity: 0.5,
    transparent: true,
  });

const waterColor =  new THREE.Color(`rgb(4, 185, 248)`);

const waterMaterial =  new THREE.MeshPhongMaterial({
    color: waterColor,
    opacity: 1,
    transparent: true,
  });

const topLatheMesh = new THREE.Mesh( topLatheGeometry );
const bottomLatheMesh = new THREE.Mesh( bottomLatheGeometry );
const topWaterMesh = new THREE.Mesh( topWaterGeometry,  waterMaterial);
const bottomWaterMesh = new THREE.Mesh( bottomWaterGeometry,  waterMaterial);

topLatheMesh.updateMatrix()
fullLatheGeometry.merge(topLatheMesh.geometry, topLatheMesh.matrix)
bottomLatheMesh.updateMatrix()
fullLatheGeometry.merge(bottomLatheMesh.geometry, bottomLatheMesh.matrix)

const fullLatheMesh = new THREE.Mesh(fullLatheGeometry, latheMaterial)
fullLatheMesh.castShadow = true; //default is false
fullLatheMesh.receiveShadow = false; //default
scene.add(topWaterMesh)
scene.add(bottomWaterMesh)
scene.add(fullLatheMesh)

const floorgeometry = new THREE.CircleGeometry( 110.2, 42 );
const floormaterial = new THREE.MeshPhongMaterial({color: activeColor, side: THREE.DoubleSide});
const floorplane = new THREE.Mesh( floorgeometry, floormaterial );
floorplane.receiveShadow = true;
floorplane.rotation.x += Math.PI / 2;
floorplane.position.y -= 33
scene.add( floorplane );

const ceilinggeometry = new THREE.CircleGeometry( 80.2, 42 );
const ceilingmaterial = new THREE.MeshPhongMaterial({color: new THREE.Color(`rgb(5,5,12)`), side: THREE.DoubleSide});
const ceilingplane = new THREE.Mesh( ceilinggeometry, ceilingmaterial );
ceilingplane.receiveShadow = true;
ceilingplane.rotation.x += Math.PI / 2;
ceilingplane.position.y += 33
scene.add( ceilingplane );

const whiteLight = new THREE.Color(`rgb(255,255,223)`);
const neonGreen = new THREE.Color(`rgb(25,235,25)`);
const neonBlue = new THREE.Color(`rgb(75,75,235)`);

const intensity = 1;

const light = new THREE.SpotLight(whiteLight);
light.position.set(100, 100, 100)//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default
light.shadow.focus = 1; // default
light.castShadow = true; // default false

const light4 = new THREE.SpotLight(whiteLight);
light4.position.set(-100, -240, -100)//Set up shadow properties for the light
light4.shadow.mapSize.width = 512; // default
light4.shadow.mapSize.height = 512; // default
light4.shadow.camera.near = 0.5; // default
light4.shadow.camera.far = 500; // default
light4.shadow.focus = 1; // default
light4.castShadow = true; // default false

light4.power = 6;

const light2 = new THREE.SpotLight(whiteLight, intensity);
light2.castShadow = true; // default false

light2.position.set(-100, 10, 3);
light2.power = 2;
light2.decay = 1;
light2.distance = Infinity;

const light3 = new THREE.SpotLight(whiteLight, intensity);
light3.castShadow = true; // default false

light3.position.set(-10, 70, 3);
light3.power = 2;
light3.decay = 1;
light3.distance = Infinity;

scene.add(light);
scene.add(light2);
scene.add(light3);
scene.add(light4);



 // creating a wave object
    var waveGeometry = new THREE.PlaneGeometry
        (15, 6, 70, 70);
    //geometry = new THREE.WireframeGeometry(geometry);
    var waveMaterial = new THREE.MeshPhongMaterial({color: waterColor, side: THREE.DoubleSide});
    const wave = new THREE.Mesh(waveGeometry, waveMaterial);
    wave.rotation.x -= 366;
    wave.position.y -= 3;
    scene.add(wave);


// function that do all magic
// core formula: z = 0.6(sin(x+y+t) + cos(2t-y-xy));
function updateWave() {
    var t = Date.now() * 0.004;
    try {
    for(var v of wave.geometry.vertices) {
        var x = v.x, y = v.y, z = v.z,
            e = Math.E, pi = Math.PI,
            d = Math.hypot(x, y),
            sin = a => Math.sin(a),
            cos = a => Math.cos(a),
            sqrt = a => Math.sqrt(a),
            abs = a => Math.abs(a),
            log = a => Math.log(a);
        // change the bottom algorithm acordding to wavelist
        
        v.z = cos(d - t) + (y / 3)
        
    }
    } catch(e) {

    }
    wave.geometry.verticesNeedUpdate = true;
    wave.geometry.computeVertexNormals();
}


    function updateHourGlass() {
            var t = Date.now() * 0.004;
            
        fullLatheMesh.rotation.y += 0.01
        topCylinder.rotation.y += 0.01
        bottomCylinder.rotation.y += 0.01
        topWaterMesh.rotation.y += 0.01
        bottomWaterMesh.rotation.y += 0.01
    }


camera.position.z = 50;
camera.position.y -= 6;
	var stars=[];
	function addSphere(){

				// The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
				for ( var z= -1000; z < 1000; z+=20 ) {
		
					// Make a sphere (exactly the same as before). 
					var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
					var material = new THREE.MeshBasicMaterial( {color: waterColor} );
					var sphere = new THREE.Mesh(geometry, material)
		
					// This time we give the sphere random x and y positions between -500 and 500
					sphere.position.x = Math.random() * 1000 - 500;
					sphere.position.y = Math.random() * 1000 - 500;
		
					// Then set the z position to where it is in the loop (distance of camera)
					sphere.position.z = z;
		
					// scale it up a bit
					sphere.scale.x = sphere.scale.y = 2;
		
					//add the sphere to the scene
					scene.add( sphere );
		
					//finally push it to the stars array 
					stars.push(sphere); 
				}
	}

	function animateStars() { 
				
		// loop through each star
		for(var i=0; i<stars.length; i++) {
			
			let star = stars[i]; 
				
			// and move it forward dependent on the mouseY position. 
			star.position.z +=  i/10;
				
			// if the particle is too close move it to the back
			if(star.position.z>1000) star.position.z-=2000; 
			
		}
	
	}

function animate() {
    animateStars();
    requestAnimationFrame( animate );
    updateWave();
    updateHourGlass()
    
	renderer.render( scene, camera );
}
addSphere()
animate();