<?php

include "db_connect.php";

$sql = "SELECT * FROM orders ORDER BY order_date DESC";

$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html>

<head>

    <title>View Orders</title>

    <style>

        body {
            font-family: Arial, sans-serif;
            background: #f2f4f7;
            margin: 0;
            padding: 40px;
        }

        .container {
            width: 90%;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 25px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            background: #333;
            color: white;
            padding: 12px;
        }

        td {
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }

        tr:hover {
            background: #f5f5f5;
        }

        .back {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 18px;
            background: #333;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }

        .back:hover {
            background: #555;
        }

    </style>

</head>

<body>

<div class="container">

    <h1>All Shopping Orders</h1>

    <table>

        <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Order Date</th>
        </tr>

        <?php

        if ($result->num_rows > 0) {

            while ($row = $result->fetch_assoc()) {

                echo "<tr>";

                echo "<td>" . $row["order_id"] . "</td>";

                echo "<td>" . htmlspecialchars($row["customer_name"]) . "</td>";

                echo "<td>" . htmlspecialchars($row["product_name"]) . "</td>";

                echo "<td>" . $row["quantity"] . "</td>";

                echo "<td>₹" . number_format($row["price"], 2) . "</td>";

                echo "<td>" . $row["order_date"] . "</td>";

                echo "</tr>";
            }

        } else {

            echo "<tr>";
            echo "<td colspan='6'>No orders found.</td>";
            echo "</tr>";
        }

        ?>

    </table>

    <a class="back" href="index.html">
        ← Back to Order Form
    </a>

</div>

</body>

</html>

<?php

$conn->close();

?>