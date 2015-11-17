//
//  FirstViewController.swift
//  NewPal
//
//  Created by Kien Pham on 11/16/15.
//  Copyright © 2015 KNN Creative. All rights reserved.
//

import UIKit
import Parse
//import SwiftLocation
import CoreLocation


class FirstViewController: UIViewController, CLLocationManagerDelegate {
    let locationManager = CLLocationManager()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
//        let testObject = PFObject(className: "TestObject")
//        testObject["foo"] = "bar"
//        testObject.saveInBackgroundWithBlock { (success: Bool, error: NSError?) -> Void in
//            print("Object has been saved.")
//        }
        
//                do {
//        
//                try SwiftLocation.shared.currentLocation(Accuracy.Neighborhood, timeout: 20, onSuccess: { (location) -> Void in
//                    // location is a CLPlacemark
//                        print(location)
//                    }) { (error) -> Void in
//                        // something went wrong
//                        print(error)
//                }
//        
//                } catch {
//                    print(1)
//                }
        
        // Ask for Authorisation from the User.
        self.locationManager.requestAlwaysAuthorization()
        
        // For use in foreground
        self.locationManager.requestWhenInUseAuthorization()
        
        if CLLocationManager.locationServicesEnabled() {
            locationManager.delegate = self
            locationManager.desiredAccuracy = kCLLocationAccuracyNearestTenMeters
            locationManager.startUpdatingLocation()
        }

        
    }

    func locationManager(manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        let locValue:CLLocationCoordinate2D = manager.location!.coordinate
        print("locations = \(locValue.latitude) \(locValue.longitude)")
    }

    
//    func locationManager(manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
//        print("locations = \(locations)")
//        let userLocation:CLLocation = locations[0]
//        let long = userLocation.coordinate.longitude;
//        let lat = userLocation.coordinate.latitude;
//        //Do What ever you want with it
//        print(long)
//        print(lat)
//    }
    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

