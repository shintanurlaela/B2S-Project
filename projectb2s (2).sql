-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2024 at 11:18 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectb2s`
--

-- --------------------------------------------------------

--
-- Table structure for table `bukus`
--

CREATE TABLE `bukus` (
  `id_buku` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bukus`
--

INSERT INTO `bukus` (`id_buku`, `judul`, `deskripsi`, `gambar`, `link`, `createdAt`, `updatedAt`) VALUES
(3, 'HAHAHA', 'buku pelajaran', 'image-1715099052143-TESTCOVER.png', 'https://docs.google.com/document/d/1S4g6qjo7FovmYAaSRUDjYonueh3kbjDn/edit?usp=drive_link&ouid=101957268872369728097&rtpof=true&sd=true', '2024-05-07 15:42:54', '2024-05-07 16:24:12'),
(4, 'COBAAJA', 'cobaaja', 'image-1715099065589-TESTCOVERGURL.png', 'https://docs.google.com/document/d/1S4g6qjo7FovmYAaSRUDjYonueh3kbjDn/edit?usp=drive_link&ouid=101957268872369728097&rtpof=true&sd=true', '2024-05-07 16:10:38', '2024-05-07 16:24:25');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240504101623-create-user.js'),
('20240504124741-create-buku.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nama_user` varchar(255) DEFAULT NULL,
  `role` enum('siswa','admin') DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `nama_user`, `role`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'shinta', 'siswa', '150505', 'siswa', '2024-05-04 10:41:09', '2024-05-04 14:00:14'),
(4, 'rere', 'siswa', '123456789', '111', '2024-05-09 06:11:35', '2024-05-09 06:11:35'),
(5, 'ray', 'siswa', '345', '333', '2024-05-09 06:12:26', '2024-05-09 06:12:26'),
(6, 'reva', 'admin', 'rere', '111', '2024-05-09 09:39:07', '2024-05-09 09:39:07'),
(7, 'ray', 'admin', '222', '111', '2024-05-09 09:42:41', '2024-05-09 09:42:41'),
(8, 'reva rahayu', 'siswa', 'jasmine', '12345', '2024-05-09 10:23:51', '2024-05-09 10:23:51'),
(9, 'jasmine', 'siswa', 'jasmine', '111', '2024-05-09 10:39:29', '2024-05-09 10:39:29'),
(10, 'niel', 'siswa', 'niel', '111', '2024-05-09 12:14:57', '2024-05-09 12:14:57'),
(11, 'shinta', 'siswa', '150505', '111', '2024-05-09 12:23:08', '2024-05-09 12:23:08'),
(12, 'admin', 'admin', 'admin', 'admin', '2024-05-10 14:48:06', '2024-05-10 14:48:06'),
(13, 'shinta', 'siswa', '150505', 'siswa', '2024-05-10 12:56:32', '2024-05-10 12:56:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bukus`
--
ALTER TABLE `bukus`
  ADD PRIMARY KEY (`id_buku`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bukus`
--
ALTER TABLE `bukus`
  MODIFY `id_buku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
