CREATE TABLE county (
	county_id TEXT,
	us_state TEXT,
	county TEXT
);

CREATE TABLE poverty (
	county_id TEXT,
	poverty_percentage2019 TEXT,
	poverty_percentage2018 TEXT,
	poverty_percentage2017 TEXT,
	poverty_percentage2016 TEXT
);

CREATE TABLE day_count2019 (
	county_id TEXT,
	days_with_aqi2019 TEXT,
	good_days2019 TEXT,
	moderate_days2019 TEXT,
	unhealthy_sensitive_days2019 TEXT,
	unhealthy_days2019 TEXT,
	very_unhealthy_days2019 TEXT,
	hazardous_days2019 TEXT	
);

CREATE TABLE day_count2018 (
	county_id TEXT,
	days_with_aqi2018 TEXT,
	good_days2018 TEXT,
	moderate_days2018 TEXT,
	unhealthy_sensitive_days2018 TEXT,
	unhealthy_days2018 TEXT,
	very_unhealthy_days2018 TEXT,
	hazardous_days2018 TEXT	
);

CREATE TABLE day_count2017 (
	county_id TEXT,
	days_with_aqi2017 TEXT,
	good_days2017 TEXT,
	moderate_days2017 TEXT,
	unhealthy_sensitive_days2017 TEXT,
	unhealthy_days2017 TEXT,
	very_unhealthy_days2017 TEXT,
	hazardous_days2017 TEXT	
);

CREATE TABLE day_count2016 (
	county_id TEXT,
	days_with_aqi2016 TEXT,
	good_days2016 TEXT,
	moderate_days2016 TEXT,
	unhealthy_sensitive_days2016 TEXT,
	unhealthy_days2016 TEXT,
	very_unhealthy_days2016 TEXT,
	hazardous_days2016 TEXT	
);

CREATE TABLE pollutant_breakdown2019 (
	days_co2019 TEXT,
	days_no2_2019 TEXT,
	days_ozone2019 TEXT,
	days_so2_2019 TEXT,
	days_pm2_2019 TEXT,
	days_pm10_2019 TEXT
);

CREATE TABLE pollutant_breakdown2018 (
	days_co2018 TEXT,
	days_no2_2018 TEXT,
	days_ozone2018 TEXT,
	days_so2_2018 TEXT,
	days_pm2_2018 TEXT,
	days_pm10_2018 TEXT
);

CREATE TABLE pollutant_breakdown2017 (
	days_co2017 TEXT,
	days_no2_2017 TEXT,
	days_ozone2017 TEXT,
	days_so2_2017 TEXT,
	days_pm2_2017 TEXT,
	days_pm10_2017 TEXT
);

CREATE TABLE pollutant_breakdown2016 (
	days_co2016 TEXT,
	days_no2_2016 TEXT,
	days_ozone2016 TEXT,
	days_so2_2016 TEXT,
	days_pm2_2016 TEXT,
	days_pm10_2016 TEXT
);

















