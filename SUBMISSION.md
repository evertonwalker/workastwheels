# Steps 

So I started for this first ticket here:

- > As a user, I want to filter the available vehicles by additional criteria such as the hourly rate, maximum number of passengers, vehicle classification, and vehicle make so that I can quickly find the best vehicle for my needs.

I see there a component already created Called Additional Filters, so I get this component and I started my components by there,

My first component it was QuantityPAssengersFilter, I added a small Select dropdown there and the values I get the list by options looking to API and with that I show the dropdown.
Also I need to change the default value of minPassagers instead 1 to 4, because since the number 1 is not available on API, doesn't make sense start with 1 on defaultValue..

After that I started my second component "Price Filter", I did the calculation looking to data from API, what is the max value possible which we can have and the min, I also can do this on frontend Side and change the range when we got new vehicles, but since the API will not change ( I was working with that premise ) it's okay for now, so I created a range where you can slide the bar and see data being changed on the screen.

The others components is quick similar - ClassificationFilter and MakeFilter - Both receive a array of string, which you can click on checkbox to select the values which you want to
see on the screen, so with all those components we're able to filter based on values which we want.

> As a user I would like the ability to reset the filters to the default values.

The second part I created a button called ClearFilter and inject on Additional Filters as well, what I did this? that modal on mobile is really beautiful, and make the user experience better, so I prefer keep there.

The functionality of this button is really simple, it's calling the functionlity to reset the form native from userForm by react library, but I need to do a small changes,
that function it was cleaning my components but the date filters, doesn't change, so I need to go to component Calendar and add the value: 
 onDayClick={() => props.selected}, that makes the calendar clear when I click to reset to default values.. also on TimeRageFilter, I need to added the property value, on components
 responsible for select the HOURS, with that, all components are cleaning the data when the user click the button.

 > As a user, I want to see a thumbnail of the vehicle as well as more information about it such as the number of passengers it seats, the model year, and the vehicle classification so that I can make an informed decision.

 That one it was more simple for me, I found the component Vehicles details, and I saw we're missing the price per hour, so I added that value there, and with that component, I go
 to Vehicle list where we're showing the list of vehicles and put there.
 
  