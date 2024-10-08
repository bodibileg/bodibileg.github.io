package model;

import java.util.ArrayList;
import java.util.List;

public class BeerExpert {
    public List<String> getBrands(String color) {
        List<String> brands = new ArrayList<>();
        if (color.equals("amber")) {
            brands.add("Jack Amber");
            brands.add("Red Moose");
        } else if (color.equals("light")) {
            brands.add("Jail Pale Ale");
            brands.add("Gout Stout");
        } else if (color.equals("brown")) {
            brands.add("Brown Bear Beer");
        } else if (color.equals("dark")) {
            brands.add("Dark Lord");
            brands.add("Witch's Brew");
        }
        return brands;
    }
}
