from pyexpat import model
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

class RoomType(models.Model):
    user_linked = models.ForeignKey(User,on_delete=models.CASCADE)
    roomType = models.CharField(max_length=20)

class Room(models.Model):
    user_linked = models.ForeignKey(User, on_delete=models.CASCADE)
    room_number = models.IntegerField()
    room_type = models.ForeignKey(RoomType,on_delete=models.CASCADE)
    number_of_person = models.IntegerField()
    smoking = models.BooleanField()
    room_rate = models.IntegerField()


class RoomAvailability(models.Model):
    room_id = models.ForeignKey(Room,on_delete=models.CASCADE)
    day_date_from = models.DateTimeField()
    day_date_till = models.DateTimeField(null=True)
    available = models.BooleanField()


class CustomerDetail(models.Model):
    user_linked = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    is_married = models.BooleanField(default=False)
    mobile_num_regex = RegexValidator(
        regex="^[0-9]{10,15}$", message="Entered mobile number isn't in a right format!")

    mobile_number = models.CharField(
        validators=[mobile_num_regex], max_length=13, blank=True)
    address = models.TextField()
    id_proof = models.ImageField()
    remark = models.TextField(null=True,blank=True)


class Booking(models.Model):
    customer_id = models.ForeignKey(CustomerDetail,on_delete=models.CASCADE)
    room_number = models.ForeignKey(Room,on_delete=models.CASCADE)
    number_of_people = models.IntegerField(default=2)
    booking_number = models.IntegerField()
    date_from = models.DateField()
    date_to = models.DateField()
    check_in = models.DateTimeField()
    check_out = models.DateTimeField()
    rate = models.IntegerField()
    coming_from = models.CharField(max_length = 100)
    going_to = models.CharField(max_length = 100)

