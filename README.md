# Open Orders Performance

This is a live dhasboard that shows the number of Sales Orders pending for picking, the activity per employee, and a comparison between current day and previous day.

The 'Dashboard' is displayed in a 65 inches monitor in the middle of the warehouse, and has the intention to increase productivity performance by modifying only one variable, the awarness of being observed.

To Hawthorne Effect

To prove the hypotesis that employees productivity increses when they feel they are being monitored, I will create another chart that compares the data before and after the dashboard was published.

Early in the morning, the dashboard displays zero activity and the number of orders picked and packed the previous day.

<img src="https://github.com/wdsrx/picking_packing/blob/main/screenshots/morning.png">


The dashboard is devided in three parts:
1. Total Open Orders: Sales orders that need to be picked and packed.
2. Employee Activity: This section is devided in 3 parts:
   - Single Picking Activity: Sales Orders picked one by one
   - Single Packed Orders: Sales Orders packed one by one
   - Grouped Picking Activity: Orders picked in a group or batch
3. The third section in the bottom shows the number of sales orders picked, packed and batched (grouped orders), and compares the number with the previous day. If the small number next to it is in green, means that the warehouse has produced more than the previous day. If the small number is in red, means that the warehouse has produced less orders than the previous day.

<img src="https://github.com/wdsrx/picking_packing/blob/main/screenshots/afternoon.png">


