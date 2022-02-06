# Giovanni's sandwiches - created by Krisztina Fekete

1) Please make sure Node is installed: open a terminal/command prompt, type node -v, then push Enter. If you cannot see the version number of your node, it must be installed. Visit https://nodejs.org/en/download/ to download and install Node.

2) Please open the project files by any code editors (VS code is suggested) then type `npm install` command to the terminal. Then pus Enter. This step is required to install the node modules to this project.

3) Use `npm run dev`. This command runs the app in the development mode and you can view the project in (http://localhost:3000). You can close the development mode by using ctr c, then type Y (as yes)

4) To run the written unit test please type the `npm run test` then push Enter.


# Notes
-I created 2 tabs: 
    "Add New Order" --> this should be used by the customers of Giovanni. When a new order is submitted the order data will be sent to the database
    "Order Schedule" --> Giovanni can view here all his orders. The data that he sees is fetched from the database. 

- The exact working method of the scheduling was not obvious so I understood it the following way: based on my interpretation Giovanni would like to start the schedule when he turns on the app. To achieve this, I stored into the database the orders and their duration but the schueduling (when I add the start time to each order) will happen when the app is loaded. The Start time of the first item will be equal to the actual time. For example: Giovanni has 3 not completed orders in the queue (in the database) and decides to start his work at 3:00:00 PM. In this case his starts the app at 3:00 PM so the first task will be scheduled to 3:00:00 PM, the next will be scheduled to 3:02:30 PM, etc.

- When I'm fetching the queued orders from the database, I use a filter to get only the orders with "pending" status

- Change the status from "pending" to "completed": it was not in the current requirement description but I assume that Giovanni would like to mark somehow the tasks that he already completed, for example by clicking on a button on the screen, or clicking on the row. In the future this function can be implemented: for example when the "Complete" button is clicked, the app should send a request to the DB and change the status of that item from "pending" to "completed" based on its "_id". 
