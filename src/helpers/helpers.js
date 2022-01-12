

export function currency(value)
{
    return new Intl.NumberFormat('en-US', 
                        {style: 'currency',currency: 'USD',maximumFractionDigits: 0,  minimumFractionDigits: 0,    

                    }).format(value)
}