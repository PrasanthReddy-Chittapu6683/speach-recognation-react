//Import Dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// Define Gesture Description
export const iluGesture = new GestureDescription('i_love_you');

// Thumb Gesture
iluGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
iluGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
iluGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
iluGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
iluGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Pinky
iluGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
iluGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for (let finger of [Finger.Middle, Finger.Ring]){
    iluGesture.addCurl(finger, FingerCurl.FullCurl, 0.75 );
    iluGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25)
}