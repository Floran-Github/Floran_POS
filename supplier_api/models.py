from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

class supplier(models.Model):
    gst_num_regex = RegexValidator(
        regex="^[0-9]{2}[A-Z]{5}[0-9]{4}"+"[A-Z]{1}[1-9A-Z]{1}"+"Z[0-9A-Z]{1}$", message="Enter Valid GSt Number")
    mobile_num_regex = RegexValidator(
        regex="^[0-9]{10,15}$", message="Entered mobile number isn't in a right format!")
    
    user_linked = models.ForeignKey(User,on_delete=models.CASCADE,null=True,related_name='supplier')
    name = models.CharField(max_length=100)
    address = models.TextField()
    gst_number = models.CharField(
        validators=[gst_num_regex], max_length=15)
    mobile_number = models.CharField(
        validators=[mobile_num_regex], max_length=13, blank=True)
    
    def __str__(self) -> str:
        return f'{self.user_linked} - {self.name}'