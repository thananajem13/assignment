-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2022 at 09:38 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sequelize3`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `quantity`, `createdAt`, `updatedAt`, `UserId`) VALUES
(3, 'p12', ' desc prod', 5.5, 23, '2022-09-23 18:55:39', '2022-09-23 18:55:39', NULL),
(4, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 18:55:47', '2022-09-23 18:55:47', NULL),
(5, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:11:33', '2022-09-23 19:11:33', NULL),
(6, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:11:38', '2022-09-23 19:11:38', NULL),
(7, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:11:38', '2022-09-23 19:11:38', NULL),
(8, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:11:39', '2022-09-23 19:11:39', NULL),
(9, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:11:40', '2022-09-23 19:11:40', NULL),
(10, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:11:40', '2022-09-23 19:11:40', NULL),
(11, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:11:41', '2022-09-23 19:11:41', NULL),
(12, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:13:24', '2022-09-23 19:13:24', NULL),
(13, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:13:28', '2022-09-23 19:13:28', NULL),
(14, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:15:32', '2022-09-23 19:15:32', NULL),
(15, 'p122', ' desc prod2', 5.5, 23, '2022-09-23 19:17:17', '2022-09-23 19:17:17', NULL),
(16, 'p122', 'update desc prod', 5.5, 23, '2022-09-23 19:17:46', '2022-09-23 19:19:23', 3),
(17, 'p3', ' desc prod3', 7, 5, '2022-09-23 19:25:07', '2022-09-23 19:25:07', 3),
(18, 'p3', ' desc prod3', 7, 5, '2022-09-23 19:25:11', '2022-09-23 19:25:11', 3),
(19, 'p3', ' desc prod3', 7, 5, '2022-09-23 19:25:12', '2022-09-23 19:25:12', 3),
(20, 'p3', ' desc prod3', 7, 5, '2022-09-23 19:25:13', '2022-09-23 19:25:13', 3),
(21, 'p3', ' desc prod3', 7, 5, '2022-09-23 19:25:15', '2022-09-23 19:25:15', 3),
(22, 'p01', ' desc prod3', 7, 5, '2022-09-23 19:25:21', '2022-09-23 19:25:21', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `eMail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `age` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `eMail`, `password`, `phone`, `age`, `createdAt`, `updatedAt`) VALUES
(1, 'Ali', 'Ballout', 'Ali.ballout24@gmail.com', 'mohammadB23@', NULL, 18, '2022-09-23 19:14:14', '2022-09-23 19:14:14'),
(2, 'Ahmad', 'Ballout', 'Ali.ballout234@gmail.com', 'mohammadB23@', NULL, 18, '2022-09-23 19:14:24', '2022-09-23 19:14:24'),
(3, 'Ahmad', 'Ballout', 'Alisllout234@gmail.com', 'mohammadB23@', NULL, 28, '2022-09-23 19:14:41', '2022-09-23 19:14:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `eMail` (`eMail`),
  ADD UNIQUE KEY `eMail_2` (`eMail`),
  ADD UNIQUE KEY `eMail_3` (`eMail`),
  ADD UNIQUE KEY `eMail_4` (`eMail`),
  ADD UNIQUE KEY `eMail_5` (`eMail`),
  ADD UNIQUE KEY `eMail_6` (`eMail`),
  ADD UNIQUE KEY `eMail_7` (`eMail`),
  ADD UNIQUE KEY `eMail_8` (`eMail`),
  ADD UNIQUE KEY `eMail_9` (`eMail`),
  ADD UNIQUE KEY `eMail_10` (`eMail`),
  ADD UNIQUE KEY `eMail_11` (`eMail`),
  ADD UNIQUE KEY `eMail_12` (`eMail`),
  ADD UNIQUE KEY `eMail_13` (`eMail`),
  ADD UNIQUE KEY `eMail_14` (`eMail`),
  ADD UNIQUE KEY `eMail_15` (`eMail`),
  ADD UNIQUE KEY `eMail_16` (`eMail`),
  ADD UNIQUE KEY `eMail_17` (`eMail`),
  ADD UNIQUE KEY `eMail_18` (`eMail`),
  ADD UNIQUE KEY `eMail_19` (`eMail`),
  ADD UNIQUE KEY `eMail_20` (`eMail`),
  ADD UNIQUE KEY `eMail_21` (`eMail`),
  ADD UNIQUE KEY `eMail_22` (`eMail`),
  ADD UNIQUE KEY `eMail_23` (`eMail`),
  ADD UNIQUE KEY `eMail_24` (`eMail`),
  ADD UNIQUE KEY `eMail_25` (`eMail`),
  ADD UNIQUE KEY `eMail_26` (`eMail`),
  ADD UNIQUE KEY `eMail_27` (`eMail`),
  ADD UNIQUE KEY `eMail_28` (`eMail`),
  ADD UNIQUE KEY `eMail_29` (`eMail`),
  ADD UNIQUE KEY `eMail_30` (`eMail`),
  ADD UNIQUE KEY `eMail_31` (`eMail`),
  ADD UNIQUE KEY `eMail_32` (`eMail`),
  ADD UNIQUE KEY `eMail_33` (`eMail`),
  ADD UNIQUE KEY `eMail_34` (`eMail`),
  ADD UNIQUE KEY `eMail_35` (`eMail`),
  ADD UNIQUE KEY `eMail_36` (`eMail`),
  ADD UNIQUE KEY `eMail_37` (`eMail`),
  ADD UNIQUE KEY `eMail_38` (`eMail`),
  ADD UNIQUE KEY `eMail_39` (`eMail`),
  ADD UNIQUE KEY `eMail_40` (`eMail`),
  ADD UNIQUE KEY `eMail_41` (`eMail`),
  ADD UNIQUE KEY `eMail_42` (`eMail`),
  ADD UNIQUE KEY `eMail_43` (`eMail`),
  ADD UNIQUE KEY `eMail_44` (`eMail`),
  ADD UNIQUE KEY `eMail_45` (`eMail`),
  ADD UNIQUE KEY `eMail_46` (`eMail`),
  ADD UNIQUE KEY `eMail_47` (`eMail`),
  ADD UNIQUE KEY `eMail_48` (`eMail`),
  ADD UNIQUE KEY `eMail_49` (`eMail`),
  ADD UNIQUE KEY `eMail_50` (`eMail`),
  ADD UNIQUE KEY `eMail_51` (`eMail`),
  ADD UNIQUE KEY `eMail_52` (`eMail`),
  ADD UNIQUE KEY `eMail_53` (`eMail`),
  ADD UNIQUE KEY `eMail_54` (`eMail`),
  ADD UNIQUE KEY `eMail_55` (`eMail`),
  ADD UNIQUE KEY `eMail_56` (`eMail`),
  ADD UNIQUE KEY `eMail_57` (`eMail`),
  ADD UNIQUE KEY `eMail_58` (`eMail`),
  ADD UNIQUE KEY `eMail_59` (`eMail`),
  ADD UNIQUE KEY `eMail_60` (`eMail`),
  ADD UNIQUE KEY `eMail_61` (`eMail`),
  ADD UNIQUE KEY `eMail_62` (`eMail`),
  ADD UNIQUE KEY `eMail_63` (`eMail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_10` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_11` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_12` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_13` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_14` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_15` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_16` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_17` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_18` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_19` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_20` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_21` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_22` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_23` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_24` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_25` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_26` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_27` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_28` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_29` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_30` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_31` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_32` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_33` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_34` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_35` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_36` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_37` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_38` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_39` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_4` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_40` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_41` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_42` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_43` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_44` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_45` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_46` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_47` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_48` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_49` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_5` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_50` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_51` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_52` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_53` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_54` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_55` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_56` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_57` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_58` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_59` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_6` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_60` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_61` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_62` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_63` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_7` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_8` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_9` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
