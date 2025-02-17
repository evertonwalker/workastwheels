# Steps 

So I started for this first ticket here:

- > As a user, I want to filter the available vehicles by additional criteria such as the hourly rate, maximum number of passengers, vehicle classification, and vehicle make so that I can quickly find the best vehicle for my needs.

I noticed that there was already a component called Additional Filters, so I used it as a starting point for developing my components.

# QuantityPassengersFilter
The first component I created was QuantityPassengersFilter, where I added a small dropdown selector. The available values are dynamically fetched from the API to populate the dropdown options. Additionally, I needed to change the default value of minPassengers from 1 to 4, since the number 1 is not available in the API. It didn’t make sense to have 1 as the default value if it wasn’t an option.

# Price Filter

Next, I implemented the PriceFilter. To determine the minimum and maximum price range, I retrieved data from the API to get the highest and lowest available values.
I could also have recalculated these values on the frontend whenever new vehicles were loaded, but since I was working under the assumption that the API values wouldn’t change, I kept it simple for now. Then created a range slider, allowing users to adjust the price dynamically and see the filtered results update in real time.

# Classification and Make Filters

The next two components, ClassificationFilter and MakeFilter, follow a similar structure.
Both receive an array of strings and display checkboxes that allow users to select their desired filter options.
With these components in place, users can filter the available vehicles according to their preferences.

> As a user I would like the ability to reset the filters to the default values.

To achieve this, I created a ClearFilter button and integrated it into the Additional Filters component. I decided to keep it inside because on the mobile version it enhances the user experience and maintains a clean interface.

The button triggers the native reset function from react-hook-form. However, I noticed that some filters, like date and time, were not resetting properly. To fix this, I made the following adjustments:

Calendar Component: I added the property onDayClick={() => props.selected}, ensuring the calendar is cleared when the reset button is clicked.

TimeRangeFilter: I updated the value property for the hour selection components, ensuring that all filters reset correctly when the button is pressed.


 > As a user, I want to see a thumbnail of the vehicle as well as more information about it such as the number of passengers it seats, the model year, and the vehicle classification so that I can make an informed decision.

 That one it was more simple for me, I found the component Vehicles details, and I saw we're missing the price per hour, so I added that value there, and with that component, I go
 to Vehicle list where we're showing the list of vehicles and put there.

