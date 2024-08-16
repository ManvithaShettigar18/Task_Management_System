-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 12:47 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taskmangementsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(50) NOT NULL,
  `taskId` int(11) DEFAULT NULL,
  `employeeName` varchar(50) NOT NULL,
  `employeeEmail` varchar(50) NOT NULL,
  `employeeRole` varchar(50) NOT NULL,
  `employeePassword` varchar(50) NOT NULL,
  `employeeContact` bigint(30) NOT NULL,
  `empUid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `taskId`, `employeeName`, `employeeEmail`, `employeeRole`, `employeePassword`, `employeeContact`, `empUid`) VALUES
(71, 69, 'indu', 'indu@gmail.com', 'Employee', 'induD11@123', 1234567877, 'rdl13'),
(72, 68, 'spooki', 'spoo@gmail.com', 'Employee', 'Spoo@1234', 4676535367, 'rdl123'),
(73, 71, 'nachappe', 'nachappe@gmail.com', 'Employee', 'nach123', 1234567435, 'rdl14'),
(74, NULL, 'indu1', 'indu1@gmail.com', 'Employee', 'inddduD@123', 1234567877, 'rdl13'),
(77, 69, 'indu', 'admin@gmail.com', 'Admin', 'admin@123', 1234567877, 'rdl13'),
(78, 69, 'manvitha', 'ma@gmail.com', 'Employee', 'ma@123', 4545655768, '111'),
(79, NULL, 'ggdf', 'manvitha@gmail.com', 'Admin', '34A', 4545655768, 'rgg'),
(86, NULL, 'R15', 'R15@gmail.com', 'Employee', 'ns@123abA', 4545655768, '1');

-- --------------------------------------------------------

--
-- Table structure for table `empnotification`
--

CREATE TABLE `empnotification` (
  `id` int(11) NOT NULL,
  `empId` int(11) NOT NULL,
  `Date` varchar(30) NOT NULL,
  `sentMessage` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `empnotification`
--

INSERT INTO `empnotification` (`id`, `empId`, `Date`, `sentMessage`) VALUES
(1, 72, '23-05-2023', 'dffddgfdf'),
(2, 73, '2023-09-18', 'dsfdggdfhd'),
(3, 73, '2023-09-18', 'dsfdggdfhd44'),
(4, 73, '2023-09-18', 'sdafetr'),
(5, 73, '2023-09-18', 'dfgggfd'),
(6, 73, '2023-09-18', '3dfgggfd'),
(7, 73, '2023-09-18', '3dfgggfd'),
(8, 73, '2023-09-18', '3dfgggfd'),
(9, 73, '2023-09-18', '3dfgggfd'),
(10, 73, '2023-09-18', 'sfsds'),
(11, 73, '2023-09-21', 'gfgfhg');

-- --------------------------------------------------------

--
-- Table structure for table `subtask`
--

CREATE TABLE `subtask` (
  `id` int(11) NOT NULL,
  `taskId` int(11) NOT NULL,
  `employeeId` int(11) DEFAULT NULL,
  `Name` varchar(80) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `startButton` varchar(10) NOT NULL DEFAULT 'false',
  `completeButton` varchar(10) NOT NULL DEFAULT 'true'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subtask`
--

INSERT INTO `subtask` (`id`, `taskId`, `employeeId`, `Name`, `Description`, `startButton`, `completeButton`) VALUES
(3, 68, 72, 'subTask1', 'subData', 'true', 'true'),
(4, 69, 71, 'fgfgfdh', 'dawrwrq', 'false', 'true'),
(5, 68, 72, 'subTask@', 'data', 'true', 'true'),
(7, 68, 72, 'man12subtask6', 'subData', 'true', 'true'),
(8, 71, 73, 'subtask4', 'description', 'true', 'true'),
(9, 69, NULL, 'ddtutur', 'futgigig', 'false', 'fslse');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `taskName` varchar(80) NOT NULL,
  `taskDescription` varchar(100) NOT NULL,
  `taskAssignDate` varchar(30) NOT NULL,
  `taskEndDate` varchar(30) NOT NULL,
  `taskPriority` varchar(30) NOT NULL,
  `finalTaskComplete` varchar(30) NOT NULL DEFAULT 'Not Completed',
  `taskCompletedPercentage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `taskName`, `taskDescription`, `taskAssignDate`, `taskEndDate`, `taskPriority`, `finalTaskComplete`, `taskCompletedPercentage`) VALUES
(68, 'Task1', 'task1', '2023-08-03', '2023-08-16', 'High', 'Completed', 100),
(69, 'Task2', 'task2', '2023-08-04', '2023-08-25', 'Low', 'Not Completed', 0),
(70, 'Task3', 'task3', '2023-08-10', '2023-08-31', 'Low', 'Not Completed', 0),
(71, 'task4', 'sedrftgyhujklm', '2023-09-06', '2023-09-30', 'Low', 'Completed', 100);

-- --------------------------------------------------------

--
-- Table structure for table `taskhandle`
--

CREATE TABLE `taskhandle` (
  `id` int(11) NOT NULL,
  `taskId` int(11) DEFAULT NULL,
  `subtaskId` int(11) DEFAULT NULL,
  `employeeId` int(11) DEFAULT NULL,
  `empName` varchar(80) NOT NULL,
  `taskAssignDate` varchar(10) NOT NULL,
  `assignedTaskEndDate` varchar(10) NOT NULL,
  `taskStartedDate` varchar(10) NOT NULL,
  `taskCompletedDate` varchar(50) NOT NULL,
  `status` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `taskhandle`
--

INSERT INTO `taskhandle` (`id`, `taskId`, `subtaskId`, `employeeId`, `empName`, `taskAssignDate`, `assignedTaskEndDate`, `taskStartedDate`, `taskCompletedDate`, `status`) VALUES
(1067, 68, 5, 72, 'spooki', '2023-08-03', '2023-08-16', '2023-09-07', '2023-09-09', 'Completed'),
(1070, 68, 7, 72, 'spooki', '2023-08-03', '2023-08-16', '2023-09-08', '2023-09-13', 'Delay'),
(1076, 68, 3, 72, 'spooki', '2023-08-03', '2023-08-16', '2023-09-08', '2023-09-09', 'Completed'),
(1081, 71, 8, 73, 'nachappe', '2023-09-06', '2023-09-30', '2023-09-21', '2023-09-21', 'Completed');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_ibfk_1` (`taskId`);

--
-- Indexes for table `empnotification`
--
ALTER TABLE `empnotification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empId` (`empId`);

--
-- Indexes for table `subtask`
--
ALTER TABLE `subtask`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subtask_ibfk_1` (`taskId`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `taskhandle`
--
ALTER TABLE `taskhandle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `taskId` (`taskId`),
  ADD KEY `employeeId` (`employeeId`),
  ADD KEY `subtaskId` (`subtaskId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `empnotification`
--
ALTER TABLE `empnotification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `subtask`
--
ALTER TABLE `subtask`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `taskhandle`
--
ALTER TABLE `taskhandle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1082;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `empnotification`
--
ALTER TABLE `empnotification`
  ADD CONSTRAINT `empnotification_ibfk_1` FOREIGN KEY (`empId`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subtask`
--
ALTER TABLE `subtask`
  ADD CONSTRAINT `subtask_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `subtask_ibfk_2` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `taskhandle`
--
ALTER TABLE `taskhandle`
  ADD CONSTRAINT `taskhandle_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `taskhandle_ibfk_2` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `taskhandle_ibfk_3` FOREIGN KEY (`subtaskId`) REFERENCES `subtask` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
