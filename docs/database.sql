CREATE DATABASE `delivery` COLLATE 'utf8mb4_bin';

CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `uuid` char(36) NOT NULL,
  `company_uuid` char(36) NOT NULL,
  `role_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `fancyname` varchar(100) NOT NULL,
  `document` varchar(16) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(36) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NULL ON UPDATE CURRENT_TIMESTAMP,
  `blocked_at` datetime NULL,
  `deleted_at` datetime NULL
) ENGINE='MyISAM';