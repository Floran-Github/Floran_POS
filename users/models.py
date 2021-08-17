from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
# Create your models here.
class Hotel_detail(models.Model):
    user_linked  = models.OneToOneField(User, on_delete=models.CASCADE)
    logo = models.ImageField(upload_to='profile_pics',null=True,blank=True)
    hotel_name = models.CharField(max_length=150)
    hotel_address = models.TextField()
    mobile_num_regex  = RegexValidator(regex="^[0-9]{10,15}$", message="Entered mobile number isn't in a right format!")
    mobile_number  = models.CharField(validators=[mobile_num_regex], max_length=13,unique=True)
    
    # Account nd bank detil
    gst_num_regex      = RegexValidator(regex="^[0-9]{2}[A-Z]{5}[0-9]{4}"+"[A-Z]{1}[1-9A-Z]{1}"+"Z[0-9A-Z]{1}$", message="Enter Valid GSt Number")
    gst_number = models.CharField(validators=[gst_num_regex],max_length=15,unique=True)
    bank_name = models.CharField(max_length=100)
    account_number = models.IntegerField(unique=True)
    IFC_number = models.CharField(max_length=10,unique=True)
    branch_name = models.CharField(max_length=50)
    company_pan_regex = RegexValidator(regex="^[A-Za-z]{5}\d{4}[A-Za-z]{1}$",message="Company not valid")
    company_pan = models.CharField(max_length=10,validators=[company_pan_regex],unique=True)

    def __str__(self):
        return f'{self.user_linked.username} Hotel Detail'  