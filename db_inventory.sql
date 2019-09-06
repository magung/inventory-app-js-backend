-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 31, 2019 at 03:05 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `date_added`, `date_updated`) VALUES
(1, 'laptop', '2019-08-31 12:36:02', '2019-08-31 12:36:02'),
(2, 'mouse', '2019-08-31 12:36:17', '2019-08-31 12:36:17'),
(3, 'printer', '2019-08-31 12:36:32', '2019-08-31 12:36:32'),
(4, 'keyboard', '2019-08-31 12:36:58', '2019-08-31 12:36:58'),
(5, 'harddisk', '2019-08-31 12:37:28', '2019-08-31 12:37:28');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id_product` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_category` int(50) NOT NULL,
  `quantity` int(50) NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `name`, `description`, `image`, `id_category`, `quantity`, `date_added`, `date_updated`) VALUES
(21, 'Ideapad 330', ' Ideapad 330 yang portable ini kuat dan mudah digu', 'https://www.lenovo.com/medias/lenovo-laptop-ideapad-330-14-hero.png?context=bWFzdGVyfHJvb3R8NTM0NDN8', 1, 50, '2019-08-31 12:42:00', '2019-08-31 12:42:00'),
(22, 'Epson L120', 'Printer dengan tangki original infus. Memiliki kec', 'https://s4.bukalapak.com/img/4834133238/w-300/Printer_Epson_L120_Print_Only_Resmi.jpg.webp', 3, 50, '2019-08-31 12:43:55', '2019-08-31 12:43:55'),
(23, 'Logitech M275 Wireless Mouse - Black', 'https://ecs7.tokopedia.net/img/cache/200-square/at', 'https://s4.bukalapak.com/img/4834133238/w-300/Printer_Epson_L120_Print_Only_Resmi.jpg.webp', 2, 50, '2019-08-31 12:48:36', '2019-08-31 12:48:36'),
(24, 'Rexus Battlefire K9D', 'Rexus Battlefire K9D merupakan keyboard gaming sem', 'https://rexus.id/wp-content/uploads/2017/01/Main_K9D_04.png', 4, 50, '2019-08-31 12:52:40', '2019-08-31 12:52:40'),
(25, 'WD Blue Harddisk Internal [1 TB]', 'Fitur Produk\nHarddisk internal\nRotational Speed 7.200 RPM (nominal)\nLoad/unload Cycles 300.000 minimum\nCapacity 1 TB\nForm Factor 3.5 Inch', 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-1683054/wd_hardisk-internal-wd-blue-1tb-wd10ezex_full02.jpg?output-format=webp', 5, 10, '2019-08-31 12:57:45', '2019-08-31 13:05:15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `level` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `level`) VALUES
(5, 'user', 'user', 'user@gmail.com', '04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb', 'regular'),
(6, 'admin', 'admin', 'admin@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin'),
(54, 'agung', 'agung', 'agung@gmail.com', '7bd65a0ca26e50420b8c263c2624f98231f821e8734d1f6812352b69f7a87280', 'regular');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
