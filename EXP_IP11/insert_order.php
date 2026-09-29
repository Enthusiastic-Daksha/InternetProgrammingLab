<?php

include "db_connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $customer_name = $_POST["customer_name"];
    $product_name = $_POST["product_name"];
    $quantity = $_POST["quantity"];
    $price = $_POST["price"];

    $sql = "INSERT INTO orders 
            (customer_name, product_name, quantity, price)
            VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    if ($stmt) {

        $stmt->bind_param(
            "ssid",
            $customer_name,
            $product_name,
            $quantity,
            $price
        );

        if ($stmt->execute()) {

            echo "<!DOCTYPE html>";
            echo "<html>";
            echo "<head>";
            echo "<title>Order Successful</title>";

            echo "<style>
                    body {
                        font-family: Arial;
                        background: #f2f4f7;
                        text-align: center;
                        padding-top: 100px;
                    }

                    .box {
                        background: white;
                        width: 400px;
                        margin: auto;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    }

                    h2 {
                        color: #333;
                    }

                    a {
                        display: inline-block;
                        margin: 10px;
                        padding: 10px 18px;
                        background: #333;
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                    }

                    a:hover {
                        background: #555;
                    }
                  </style>";

            echo "</head>";

            echo "<body>";

            echo "<div class='box'>";
            echo "<h2>Order Placed Successfully!</h2>";
            echo "<p>Your order has been saved in the database.</p>";

            echo "<a href='index.html'>Place Another Order</a>";
            echo "<a href='view_orders.php'>View Orders</a>";

            echo "</div>";

            echo "</body>";
            echo "</html>";

        } else {

            echo "Error inserting order: " . $stmt->error;
        }

        $stmt->close();

    } else {

        echo "Error preparing statement: " . $conn->error;
    }
}

$conn->close();

?>