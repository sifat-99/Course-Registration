# Project_features

* To manage course credit.
* Manage extra purchasing subject not able to purchase more than 1 times. 1 subject cam buy only one time. 
* To select multiple subject or courses at a time. 
* Recommendations
* Course Listings



# state_management
<!-- const [carts, setCarts] = useState([]); -->
1. 'carts' state: This state keeps track of the courses that the user has added to their cart. It's initialized as an empty array '[]'. When a course is added to the cart, it updates this state by creating a new array with the added course.
<!-- const [credit, setCredit] = useState(0); -->
2. 'credit' state: This state represents the total credit hours selected by the user. It's initialized as '0'. When a course is added to the cart and the user has enough remaining credit hours, this state is updated by adding the credit hours of the selected course.
<!-- const [remainingCreditHour, setRemainingHour] = useState(20); -->
3. 'remainingCreditHour' state: This state represents the remaining credit hours that the user can select. It's initialized as '20'. When a course is added to the cart, you update this state by subtracting the credit hours of the selected course. If the user attempts to select a course that exceeds their remaining credit hours, an error message is displayed.
<!-- const [cost, setCost] = useState(0); -->
4. 'cost' state: This state represents the total cost of the courses in the cart. It's initialized as '0'. When a course is added to the cart, you update this state by adding the course fee to the existing total cost.



<!-- Live link of this website -->
# https://tubular-gaufre-375717.netlify.app/