# Open Orders Performance

## Summary
This is a live dashboard that shows the number of Sales Orders pending for picking, the activity per employee, and a comparison between current day and previous day.

The 'Dashboard' is displayed in a 65 inches monitor in the middle of the warehouse, and has the intention to increase productivity performance by modifying only one variable, the awareness of being observed.

To evaluate the 'Hawthorne Effect', I will create another chart that compares the data before and after the dashboard was published.

## Dashboard Description
Early in the morning, the dashboard displays the number of unfinished Sales Orders, the activity of the day (zero) and the activity of the previous day in red.

<img src="https://github.com/wdsrx/picking_packing/blob/main/screenshots/morning.png">


The dashboard is divided in three sections:
1. TOP - Open Orders: Sales orders that need to be picked and packed.
2. MIDDLE: Activity by Employee. This section is divided in 3 parts:
   - Lines Picked by Employee: Sales Orders picked one order at a time.
   - Boxes Packed by Employee: Number of Boxes packed.
   - Batch Lines Moved: Sales Orders picked in a group (batch)
3. BOTTOM: Number of sales orders picked, packed and batched (grouped orders) the current day in comparison with the orders picked, packed and batched the previous day. The small number next to the big one indicates if we overperformed or underperformed.

<img src="https://github.com/wdsrx/picking_packing/blob/main/screenshots/afternoon.png">

## Summary
I haven't finished the analysis. The comparison between before and after the dashboard was displayed in the middle of the warehouse still pending.
