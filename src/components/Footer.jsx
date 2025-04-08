import React from "react";
import { Home, Star, Award, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl georgia">belong.</h3>
            <p className="text-foreground/70">
              Creating homes where people with mental health conditions truly belong.
            </p>
            <div className="flex gap-2 items-center text-primary">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-sm text-foreground/70">Licensed by the Minnesota Department of Health</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#our-homes" className="text-gray-600 hover:text-primary transition-colors">
                  Our Homes
                </a>
              </li>
              <li>
                <a href="#our-approach" className="text-gray-600 hover:text-primary transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#for-families" className="text-gray-600 hover:text-primary transition-colors">
                  For Families
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact</h4>
            <ul className="space-y-3">
              <li className="text-foreground/70">(612) 555-1234</li>
              <li className="text-foreground/70">info@belonghealthcare.com</li>
            </ul>
            <div className="flex gap-2">
              <Award className="h-8 w-8 text-success" />
              <Award className="h-8 w-8 text-success" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium">Locations</h4>
            <ul className="space-y-3">
              <li className="text-foreground/70">1234 Maple Street</li>
              <li className="text-foreground/70">5678 Oak Avenue</li>
              <li className="text-foreground/70">Brooklyn Park, MN</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-lg georgia">Created with care by Frances</span>
          </div>
          <img
            src="https://placehold.co/200x60/png?text=Frances+Signature"
            alt="Frances's signature"
            className="mx-auto mb-4 h-12"
          />
          <p className="text-gray-600">
            © {new Date().getFullYear()} Belong Health Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
