-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 30, 2019 at 06:29 AM
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
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `date_added`, `date_updated`) VALUES
(1, 'elctronic', '2019-08-29 14:25:30', '2019-08-25 17:00:00'),
(2, 'minuman', '2019-08-29 17:29:29', '2019-08-29 17:29:29'),
(3, 'sembako', '2019-08-29 17:30:17', '2019-08-29 17:30:17'),
(4, 'perkakas', '2019-08-29 17:31:15', '2019-08-29 17:31:15'),
(5, 'makanan', '2019-08-29 17:32:36', '2019-08-29 17:32:36'),
(51, 'makanan', '2019-08-29 18:19:17', '2019-08-29 18:19:17'),
(513, 'makanan', '2019-08-29 18:22:01', '2019-08-29 18:22:01'),
(5133, 'makanan', '2019-08-29 18:22:31', '2019-08-29 18:22:31'),
(51332, 'makanan', '2019-08-29 18:22:55', '2019-08-29 18:22:55');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id_product` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  `id_category` int(50) NOT NULL,
  `quantity` int(50) NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `name`, `description`, `image`, `id_category`, `quantity`, `date_added`, `date_updated`) VALUES
(2, 'epson printer baru', 'printer', 'epson', 1, 30, '2019-08-30 03:33:17', '2019-08-30 03:35:45'),
(4, 'air club3', 'air mineral asli', 'airaqua.image', 4, 20, '2019-08-25 17:00:00', '2019-08-25 17:00:00'),
(6, 'sarden abc', 'makanan ikan kaleng', 'sarden.image', 1, 50, '2019-08-25 17:00:00', '2019-08-25 17:00:00'),
(7, 'mie sedap', 'mie yang sedap', 'sedap.image', 1, 31, '2019-08-25 17:00:00', '2019-08-25 17:00:00'),
(10, 'aqua tanggung', 'air mineral asli', 'airaqua.image', 1, 20, '2019-08-25 17:00:00', '2019-08-25 17:00:00'),
(11, 'ASUS ROG', 'laptop gaming', 'asus.image', 1, 8, '2019-08-25 17:00:00', '2019-08-25 17:00:00'),
(12, 'LENOVO LEGION', 'laptop gaming', 'lenovo.image', 1, 5, '2019-08-25 17:00:00', '2019-08-25 17:00:00'),
(15, 'Xiaomi', 'smartfone ', 'xiaomi.image', 1, 20, '2019-08-26 17:00:00', '2019-08-26 17:00:00'),
(16, 'AyamBakar', 'makanan', 'ayam.image', 5, 20, '2019-08-26 17:00:00', '2019-08-26 17:00:00'),
(19, 'epson', 'printer A3', 'epson.image', 1, 22, '2019-08-29 16:07:58', '2019-08-29 16:07:58'),
(20, 'epson', 'printer A3', 'epson.image', 1, 0, '2019-08-30 02:33:35', '2019-08-30 02:33:35');

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
(16, 'user2', 'user2', 'user2@gmail.com', '6025d18fe48abd45168528f18a82e265dd98d421a7084aa09f61b341703901a3', 'regular'),
(17, 'admin2', 'admin2', 'admin2@gmail.com', '1c142b2d01aa34e9a36bde480645a57fd69e14155dacfab5a3f9257b77fdc8d8', 'admin'),
(18, 'agung maulana', 'magung', 'agung@gmail.com', '933594b02025150a9eef39600171e55372e01e3e92a9c4ffcebae896eddf4fbf', 'regular'),
(19, 'agung maulana', 'magung', 'agungadmin@gmail.com', '933594b02025150a9eef39600171e55372e01e3e92a9c4ffcebae896eddf4fbf', 'admin'),
(20, 'agung maulana', 'magung', 'agungadmin@gmail.com', '933594b02025150a9eef39600171e55372e01e3e92a9c4ffcebae896eddf4fbf', 'admin'),
(21, 'agung maulana', 'magung', 'aggas@gmail.com', '933594b02025150a9eef39600171e55372e01e3e92a9c4ffcebae896eddf4fbf', 'regular');

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
  MODIFY `id_product` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
