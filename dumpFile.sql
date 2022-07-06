-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: TEST_JUN_API
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(80) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `surname` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(80) NOT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `image` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `users_chk_1` CHECK (((char_length(`name`) >= 3) and (`name` <> _utf8mb4'undefined') and (`name` <> _utf8mb4'null'))),
  CONSTRAINT `users_chk_2` CHECK (((char_length(`surname`) >= 3) and (`surname` <> _utf8mb4'undefined') and (`surname` <> _utf8mb4'null'))),
  CONSTRAINT `users_chk_3` CHECK (((char_length(`email`) >= 5) and (`email` <> _utf8mb4'undefined') and (`email` <> _utf8mb4'null'))),
  CONSTRAINT `users_chk_4` CHECK (((`sex` = _utf8mb4'man') or (`sex` = _utf8mb4'woman')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('1ckrhw9xdl598o9i6','ccvc',NULL,'yaren@mail.ru','93efd63515cc7a9293248fb517111af1ac39c41d',NULL,'2022-07-06 06:48:42','/images/1ckrhw9xdl598o9i6/image.jpeg'),('1ckrhwabal5993np8','Van',NULL,'kayn@mail.ru','8c12e5bbf7c0685bfa58e59185281a6259a0f341',NULL,'2022-07-06 07:00:40','/images/1ckrhw9xdl598o9i6/image.jpeg'),('1ckrhwagzl5998pot','Van',NULL,'kayn12@mail.ru','8c12e5bbf7c0685bfa58e59185281a6259a0f341',NULL,'2022-07-06 07:04:36','/images/1ckrhw9xdl598o9i6/image.jpeg'),('1ckrhwaltl599byo6','Van',NULL,'kayn152@mail.ru','8c12e5bbf7c0685bfa58e59185281a6259a0f341',NULL,'2022-07-06 07:07:07','/images/1ckrhw9xdl598o9i6/image.jpeg'),('1ckrhwaoil599e2ym','Van',NULL,'kayn15h2@mail.ru','8c12e5bbf7c0685bfa58e59185281a6259a0f341',NULL,'2022-07-06 07:08:46','/images/1ckrhw9xdl598o9i6/image.jpeg'),('1ckrhwazol599kqd0','Van',NULL,'kay2@gmail.ru','8c12e5bbf7c0685bfa58e59185281a6259a0f341',NULL,'2022-07-06 07:13:57','/images/1ckrhw9xdl598o9i6/image.jpeg'),('1ckrhwrwnl58eloho','Van',NULL,'yaren010@mail.ru','93efd63515cc7a9293248fb517111af1ac39c41d',NULL,'2022-07-05 16:46:53','/images/1ckrhw9xdl598o9i6/image.jpeg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-06 12:38:57
